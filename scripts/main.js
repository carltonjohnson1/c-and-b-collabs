/*
INTERACTIVE 1: TOGGLE BUTTON
Change the colour of some elements on the website between light and dark modes when toggle
button circle div pressed. 
- move circle div along toggle button when toggle button or toggle pressed
The three E's
1. The Element(s) we want to interact with
2. The Event we want to kick off the interaction
3. The Execution: what happens next and what elements are involved
*/
// Element
let darkmode = localStorage.getItem("darkmmode");
const themeSwitch = document.getElementById("js-and-css-theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", "null");
}

if(darkmode === "active") enableDarkmode();


// Event

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
  darkmode !== "active"  ? enableDarkmode() : disableDarkmode();  
});


/*Testing themeswitch for other things start*/

// Event
themeSwitch.addEventListener("click", colorMode);

// Execution
function colorMode() {
    document.getElementById("logo").src="./images/C_and_B_Collabs_Logo_white.svg";

}



/*
INTERACTIVE 2: TAPPING ON MEET BARNEY REVEALS PICTURE OR GIF OF BARNEY
When the Meet Barney button is tapped, an image of Barney slides in with a
close button in the top right and when they button is selected it closes the image.
The three E's
1. The Element(s) we want to interact with
2. The Event we want to kick off the interaction
3. The Execution: what happens next and what elements are involved
*/ 

// Element

const revealBarney = document.getElementById("js-black-btn");
const closeVideo = document.getElementById("js-close-video-button");
const popupVideo = document.getElementById("popup-video-overlay");

// Event
revealBarney.addEventListener("click", revealVideo);
closeVideo.addEventListener("click", closeVideoButton);
popupVideo.addEventListener("click", closeVideoOverlay);

// Execution  
function revealVideo (){
document.getElementById("js-and-css-barney-video").style.display = "block";
document.getElementById("popup-video-overlay").style.display = "block";
    
}


function closeVideoButton() {
    document.getElementById("js-and-css-barney-video").style.display = "none";
    document.getElementById("popup-video-overlay").style.display = "none";
}

function closeVideoOverlay() {
    document.getElementById("js-and-css-barney-video").style.display = "none";
    document.getElementById("popup-video-overlay").style.display = "none";
}

/*
INTERACTIVE 3: TAPPING THE REVEAL PHOTOS AND THE REAL BARNEY AND CARLTON WILL REVEAL A GALLERY OF IMAGES
When the tap to reveal photos section is tapped, a single gallary of images is slides in with a
close button in the top right and when they button is selected it closes the image.
The three E's
1. The Element(s) we want to interact with
2. The Event we want to kick off the interaction
3. The Execution: what happens next and what elements are involved
*/ 

// Element
const revealGallery = document.getElementById("js-reveal");
const closeGallery = document.getElementById("js-close-reveal-button");
const popupGallery = document.getElementById("popup-reveal-overlay");

// Event
revealGallery.addEventListener("click", revealPhotos);
closeGallery.addEventListener("click", closeButton);
popupGallery.addEventListener("click", closeOverlay);

// Execution  
function revealPhotos (){

    document.getElementById("js-and-css-reveal-grid-container").style.display = "grid";
    document.getElementById("popup-reveal-overlay").style.display = "block";
       
    }

function closeButton() {
    document.getElementById("js-and-css-reveal-grid-container").style.display = "none";
    document.getElementById("popup-reveal-overlay").style.display = "none";
}

function closeOverlay() {
    document.getElementById("popup-reveal-overlay").style.display = "none";
    document.getElementById("js-and-css-reveal-grid-container").style.display = "none";
}

