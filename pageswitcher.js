function goToHome(){
    sa_event("go_home");
    document.getElementById("home").style.display = "block";
    document.getElementById("links").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("homeButton").className = "button0";
    document.getElementById("linksButton").className = "button";
    document.getElementById("projectsButton").className = "button";
    document.getElementById("galleryButton").className = "button";
}

function goToLinks(){
    sa_event("go_links");
    document.getElementById("home").style.display = "none";
    document.getElementById("links").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("homeButton").className = "button";
    document.getElementById("linksButton").className = "button0";
    document.getElementById("projectsButton").className = "button";
    document.getElementById("galleryButton").className = "button";
}

function goToProjects(){
    sa_event("go_projects");
    document.getElementById("home").style.display = "none";
    document.getElementById("links").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("homeButton").className = "button";
    document.getElementById("linksButton").className = "button";
    document.getElementById("projectsButton").className = "button0";
    document.getElementById("galleryButton").className = "button";
}

function goToGallery(){
    sa_event("go_gallery");
    document.getElementById("home").style.display = "none";
    document.getElementById("links").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("homeButton").className = "button";
    document.getElementById("linksButton").className = "button";
    document.getElementById("projectsButton").className = "button";
    document.getElementById("galleryButton").className = "button0";
}