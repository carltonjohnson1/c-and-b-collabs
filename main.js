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

/*
INTERACTIVE 4: 
a) Change words in grid items on hover to learn more
b) on click change words on Card to read how that element was used. 
The three E's
1. The Element(s) we want to interact with
2. The Event we want to kick off the interaction
3. The Execution: what happens next and what elements are involved
*/ 

// Element

const jsWords = document.getElementById("jsWords");
const uiWords = document.getElementById("uiWords");
const htmlWords = document.getElementById("htmlWords");
const cssWords = document.getElementById("cssWords");
const grahicWords = document.getElementById("grahicWords");
const animationWords = document.getElementById("animationWords");


// Event

jsWords.addEventListener("click", revealJsWords);
uiWords.addEventListener("click", revealUiWords);
htmlWords.addEventListener("click", revealHtmlWords);
cssWords.addEventListener("click", revealCssWords);
grahicWords.addEventListener("click", revealGrahicWords);
animationWords.addEventListener("click", revealAnimationWords);

// Execution


function revealJsWords (){
 
    document.getElementById("js-and-css-used-for-reveal").style.display = "flex";
    document.getElementById("wordChanges").innerText = "used for creating interactivity";
    
    }

function revealUiWords (){
    document.getElementById("js-and-css-used-for-reveal").style.display = "flex";
    document.getElementById("wordChanges").innerText = "used for creating a great user experience";
           
    }
function revealHtmlWords (){
    document.getElementById("js-and-css-used-for-reveal").style.display = "flex";
    document.getElementById("wordChanges").innerText = "used for page structure";
       
    }

function revealCssWords (){
    document.getElementById("js-and-css-used-for-reveal").style.display = "flex";
    document.getElementById("wordChanges").innerText = "used for design, layout and style";
           
    }
function revealGrahicWords (){
    document.getElementById("js-and-css-used-for-reveal").style.display = "flex";
    document.getElementById("wordChanges").innerText = "used for images and design";
       
    }

function revealAnimationWords (){
    document.getElementById("js-and-css-used-for-reveal").style.display = "flex";
    document.getElementById("wordChanges").innerText = "used for creating moving items";
           
    }


// closing revealed text when the text is clicked. 

// Element
const closeWordsChange = document.getElementById("js-and-css-used-for-reveal");

// Event

closeWordsChange.addEventListener("click", closeWords);

// Execution

function closeWords () {
    document.getElementById("js-and-css-used-for-reveal").style.display = "none"
}


// INTERACTIVE 5
// Trigger CSS Animations when elements are scrolled into view
// Got code  and how to implement from from watching the following Youtube Video: https://youtu.be/iXlkRhjnnpk?si=QPu82LJEzD2Pwklg

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {

	// Use Intersection Observer to determine if objects are within the viewport
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});

	// Get all the elements with the .animate class applied
	const allAnimatedElements = document.querySelectorAll('.animate');

	// Add the observer to each of those elements
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 

