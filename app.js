console.log('App.js is running!');

const sections = document.querySelectorAll('section');

const gradients = [
    "linear-gradient(to top right, #f85032, #e73827)",
    "linear-gradient(to top right, #f79d00, #64f38c)",
    "linear-gradient(to top right, #2980b9, #6dd5fa, #ffffff)",
    "linear-gradient(to top right, #e96443, #514452)",
]

const navLinks = document.querySelectorAll('a');

let options = {
    root: null,
    threshold: 0.7
}

let changeClass = (entries, observer) => {

    entries.forEach( (entry) => {

        if(entry.isIntersecting) {
            navLinks.forEach( (link) => {

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

// Creating an observer
const observer = new IntersectionObserver(changeClass, options);

//Observes each section
sections.forEach( (section) => {
    observer.observe(section);
});