const key = "AIzaSyBgn6Rr_6hPyDuZ914a-cvUWEDy1MT3Fqo"
fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${key}`)
    .then((res) => {
        return res.json()
    }).then((jsonData) => {
        defaultUI(jsonData)
        document.getElementById('search-icon').addEventListener('click', showRes)//null output whenever placed outside promise
        document.getElementById('nav-logo').addEventListener('click', function () { //null output whenever placed outside promise
            defaultUI(jsonData)
        })
    })


function defaultUI(data) {
    // console.log("defaultUI")
    document.getElementById('results').innerHTML = ""
    let { items } = data
    // console.log(items)
    items.forEach(elem => {
        let container = document.createElement('div')
        container.className = "container"
        container.style.cursor = "pointer"
        let { id, snippet: { thumbnails: { medium: { url } }, title } } = elem;
        container.addEventListener('click', async function () {
            playVidUI(id, title)
        })
        let thumbnail = document.createElement('img')
        thumbnail.className = "thumbnail"
        thumbnail.src = url
        let vidT = document.createElement('h5')
        vidT.className = "title"
        vidT.innerText = title
        container.append(thumbnail, vidT)
        document.getElementById('results').append(container)
    });

}


function playVidUI(vidID, vidTitle) {
    document.getElementById('results').innerHTML = ""
    document.getElementById('vid-player').style.display = "block"
    document.querySelector('iframe').src = `https://www.youtube.com/embed/${vidID}`
    document.getElementById('vid-title').innerText = vidTitle;
}

function showRes() {
    // console.log('ok')
    let search = document.getElementById('search-bar').value
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&videoType=any&key=${key}`).then((res) => {
        return res.json()
    }).then((jsonData) => {
        // console.log(jsonData)
        defaultUI(jsonData)
    })
}