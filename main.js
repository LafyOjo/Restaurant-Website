//Select element function

const selectElement = function(element){
    /* what we want to do is to return the document and then say query selector and then pass in an element. We will then call the function and the class, element or ID that we pass through will be returned to me. */
    
    return document.querySelector(element);
}

/* We call the select element similar to jQuery on how we select each element that you want so inside the brackets we just pass in the class of what i want to select which is going to be the 'menu_Toggle' */

let menuToggler = selectElement('.menu-toggle');

/* and one for the body */

let body = selectElement('body');

/* now we have them stored in two variables we can go ahead and add an event listener */

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');    
});

// Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    orgin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right',{
    orgin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top',{
    orgin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom',{
    orgin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});