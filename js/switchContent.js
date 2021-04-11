
function goHome(){
    document.getElementById("home").style = "display: initial;";
    document.getElementById("links").style = "display: none;";
    document.getElementById("other").style = "display: none;";
    document.getElementById("homebtn").classList = ["active"];
    document.getElementById("linkbtn").classList = null;
    document.getElementById("otherbtn").classList = null;
    const player = new Plyr('#fishe');
    player.stop()
    sa_event("click_home");
}

function goLinks(){
    document.getElementById("home").style = "display: none;";
    document.getElementById("links").style = "display: initial;";
    document.getElementById("other").style = "display: none;";
    document.getElementById("homebtn").classList = null;
    document.getElementById("linkbtn").classList = ["active"];
    document.getElementById("otherbtn").classList = null;
    const playera = new Plyr('#fishe');
    playera.stop()
    sa_event("click_links");
}

function goOther(){
    document.getElementById("home").style = "display: none;";
    document.getElementById("links").style = "display: none;";
    document.getElementById("other").style = "display: initial;";
    document.getElementById("homebtn").classList = null;
    document.getElementById("linkbtn").classList = null;
    document.getElementById("otherbtn").classList = ["active"];
    const playerb = new Plyr('#fishe');
    playerb.play()
    sa_event("click_others");
}

function goTwitter(){
    sa_event("twitter");
    window.location.href = "https://twitter.com/SamyoFox";
}

function goGitHub(){
    sa_event("github");
    window.location.href = "https://github.com/SamyoFox";
}

function goReddit(){
    sa_event("reddit");
    window.location.href = "https://reddit.com/user/Samyocord";
}

function goFA(){
    sa_event("fa");
    window.location.href = "https://furaffinity.net/user/Samyocord";
}