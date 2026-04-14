// Scroll function
function scrollToProjects(){
document.getElementById("projects").scrollIntoView();
}

// Typing Effect
const textArray = ["Aspiring Software Developer", "Frontend Developer", "Tech Enthusiast"];
let typingElement = document.querySelector(".typing");
let index = 0;
let charIndex = 0;

function typeEffect(){
if(charIndex < textArray[index].length){
typingElement.textContent += textArray[index].charAt(charIndex);
charIndex++;
setTimeout(typeEffect, 100);
}
else{
setTimeout(eraseEffect, 1500);
}
}

function eraseEffect(){
if(charIndex > 0){
typingElement.textContent = textArray[index].substring(0, charIndex-1);
charIndex--;
setTimeout(eraseEffect, 50);
}
else{
index = (index + 1) % textArray.length;
setTimeout(typeEffect, 200);
}
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Contact form
function submitForm(event){
event.preventDefault();
alert("Message Sent Successfully!");
}