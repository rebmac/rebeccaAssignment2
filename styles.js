// I worked on this code with my pervious partner. There will be some similarities. 





let burger = document.getElementById('burgerID');
let burgerNav = document.getElementById("jsMenu");



burger.addEventListener('click', function(event){
    burgerNav.classList.toggle('active');
    // burger.classList.toggler('burgerDisplay');
    console.log("click");
 //on click we want the 
 //on click we want the 
});

// make it so the form needs content to submit
// if nothing inside alert"fill me out first"

const formElement = document.querySelector('form');
formElement.addEventListener('submit', function(){
    event.preventDefault();
    // alert("beep");
    const nameInputElement = document.getElementById('name');
    const emailInputElement = document.getElementById('email');
    const textAreaInputElement = document.getElementById('textArea');

    if (nameInputElement.value === ""){
        alert("Please fill out your name.");
    };

    if (emailInputElement.value === ""){
        alert("Please fill out your email.");
    };

    if (textAreaInputElement.value === ""){
        alert("Please fill out your comment.");
    };
    nameInputElement.value = '';
    emailInputElement.value = '';
    textAreaInputElement.value = '';
});




