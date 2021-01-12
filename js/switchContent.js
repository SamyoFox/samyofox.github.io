function goHome(){
    document.getElementById("home").style = "display: initial;";
    document.getElementById("links").style = "display: none;";
    document.getElementById("other").style = "display: none;";
    document.getElementById("homebtn").classList = ["active"];
    document.getElementById("linkbtn").classList = null;
    document.getElementById("otherbtn").classList = null;
}

function goLinks(){
    document.getElementById("home").style = "display: none;";
    document.getElementById("links").style = "display: initial;";
    document.getElementById("other").style = "display: none;";
    document.getElementById("homebtn").classList = null;
    document.getElementById("linkbtn").classList = ["active"];
    document.getElementById("otherbtn").classList = null;
}

function goOther(){
    document.getElementById("home").style = "display: none;";
    document.getElementById("links").style = "display: none;";
    document.getElementById("other").style = "display: initial;";
    document.getElementById("homebtn").classList = null;
    document.getElementById("linkbtn").classList = null;
    document.getElementById("otherbtn").classList = ["active"];
}