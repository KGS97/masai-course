var disLikes = localStorage.getItem("disLikeCount") || 0;
var likes = localStorage.getItem("likeCount") || 0;
console.log(disLikes)
document.getElementById("likeCount").innerText=likes;
document.getElementById("disLikeCount").innerText=disLikes;
document.getElementById("likeBtn").addEventListener("click",likeIt)
document.getElementById("disLikeBtn").addEventListener("click",disLikeIt)
function likeIt(){
    // console.log("ok")
    likes++;
    document.getElementById("likeCount").innerText=likes;
    localStorage.setItem("likeCount",likes);
    
}
function disLikeIt(){
    disLikes++;
    document.getElementById("disLikeCount").innerText=disLikes;
    localStorage.setItem("disLikeCount",disLikes);
}