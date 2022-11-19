const key = "AIzaSyBgn6Rr_6hPyDuZ914a-cvUWEDy1MT3Fqo"
var currData;
var defaultData;
var searchRes;
fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${key}`)
    .then((res) => {
        return res.json()
    }).then((jsonData) => {
        let { items } = jsonData
        currData = items;
        defaultData = items
        defaultUI(defaultData)
        document.getElementById('search-btn').addEventListener('click', showRes)//null output whenever placed outside promise
        document.getElementById('nav-logo').addEventListener('click', function () { //null output whenever placed outside promise
            defaultUI(items)
        })
        document.getElementById("filter-icon").addEventListener('click', showFilters)
    })


function defaultUI(items) {
    document.getElementById('results').innerHTML = ""
    console.log(items)
    if (items.length == 0) {
        let h2 = document.createElement('h2')
        currData = defaultData;
        h2.innerText = "Sorry, No videos for you. I'm gonna return your page in 5 sec."
        h2.style.margin = "auto"
        h2.style.width = "100%"
        document.getElementById('results').append(h2)
        setTimeout(defaultUI, 5000, currData)
    } else {
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


}


function playVidUI(vidID, vidTitle) {
    document.getElementById('results').innerHTML = ""
    document.getElementById('vid-player').style.display = "block"
    document.querySelector('iframe').src = `https://www.youtube.com/embed/${vidID}`
    document.getElementById('vid-title').innerText = vidTitle;
    document.getElementById('search-btn').addEventListener('click', showRes)
}

function showRes() {
    // console.log('ok')

    let search = document.getElementById('search-bar').value
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&videoType=any&key=${key}`).then((res) => {
        return res.json()
    }).then((jsonData) => {
        let { items } = jsonData
        currData = items
        searchRes = items
        defaultUI(currData)
    })
}

let display = false;
function showFilters() {
    let table = document.querySelector('table')
    if (display) {
        table.style.display = "none"
        display = false
    } else {
        table.style.display = "block"
        display = true
    }
    document.getElementById('LastHourVids').addEventListener('click', () => {
        timeFilter(3600000)
    })
    document.getElementById('TodayVids').addEventListener('click', () => {
        timeFilter(86400000)
    })
    document.getElementById('ThisWeekVids').addEventListener('click', () => {
        timeFilter(604800000)
    })

    document.getElementById('ThisMonthVids').addEventListener('click', () => {
        timeFilter(2629800000)
    })

    document.getElementById('ThisYearVids').addEventListener('click', () => {
        timeFilter(31556952000)
    })

    document.getElementById('OnlyVids').addEventListener('click', () => {
        typeFilter("youtube#video")
    })
    document.getElementById('OnlyChannels').addEventListener('click', () => {
        typeFilter("youtube#channel")
    })
    document.getElementById('OnlyPlaylists').addEventListener('click', () => {
        typeFilter("youtube#playlist")
    })
    // document.getElementById('OnlyMovies').addEventListener('click', () => {
    //     typeFilter("youtube#movie")
    // })
}

function timeFilter(diff) {
    var now = new Date();
    currData = defaultData.filter((elem) => {
        let { snippet: { publishedAt } } = elem;
        let localDate = new Date(publishedAt)
        console.log(localDate.getTime() * 1, now.getTime())
        if (now.getTime() - localDate.getTime() * 1 <= diff) {
            return elem;
        }
    })
    defaultUI(currData)
}

function typeFilter(type) {
    console.log(currData)
    if (currData[0].kind == "youtube#searchResult") {
        currData = searchRes.filter((elem) => {
            return type == elem.kind || type == elem.id.kind
        })
    } else {
        currData = currData.filter((elem) => {
            return type == elem.kind || type == elem.id.kind
        })
    }
    defaultUI(currData)
}