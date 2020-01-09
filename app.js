// Selects all the sections 
const sections = document.querySelectorAll('section');

// Array for storing gradients from uiGradients.com
const gradients = [
    "linear-gradient(to top right, #f85032, #e73827)",
    "linear-gradient(to top right, #f79d00, #64f38c)",
    "linear-gradient(to top right, #2980b9, #6dd5fa, #ffffff)",
    "linear-gradient(to top right, #e96443, #514452)",
]

// Stores all the nav anchors
const navLinks = document.querySelectorAll('a');

// Object which help the observer compare the elements.
// Compares all elements with the standard viewport (null) and trigger the callback when 70% 
// is on the screen
let options = {
    root: null,
    threshold: 0.7
}

// Callback fn run by observer upon detecting viewport entry
let changeClass = (entries, observer) => {

    // Goes through every entry
    entries.forEach( (entry) => {

        // Only for entries which are on screen
        if(entry.isIntersecting) {
            navLinks.forEach( (link) => {
                
                // If the links match the data-set properties then clip the gradients
                if(link.dataset.page === entry.target.className) {                   
                    link.style.background = gradients[entry.target.dataset.index];
                    link.style.backgroundClip = "text";
                    link.style.webkitBackgroundClip = "text";
                    link.style.webkitTextFillColor = "transparent";

                } else {
                    link.style.background = "#000";
                    link.style.backgroundClip = "text";
                    link.style.webkitBackgroundClip = "text";
                    link.style.webkitTextFillColor = "transparent";
                }                 
            });
        }
    })
}

// Creating an observer accepts the options object and a callback
const observer = new IntersectionObserver(changeClass, options);

//Observes each section individually
sections.forEach( (section) => {
    observer.observe(section);
});