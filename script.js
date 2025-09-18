const school = document.getElementById("school");
school.style.display = "none";

const list = document.getElementsByClassName("fa-bars");
list[0].addEventListener("click", function() {
    if (school.style.display == "none") {  school.style.display = "block";}
    else {
        school.style.display = "none";
    }
});

const link = document.getElementById("link");
link.style.display = "none";

const clip = document.getElementsByClassName("fa-paperclip");
clip[0].addEventListener("click", function() {
    if (link.style.display == "none") {  link.style.display = "block";}
    else {
        link.style.display = "none";
    }
});

const aboutbtn = document.getElementById("aboutbtn");
const about = document.getElementById("about");
const list1 = document.getElementById("list");
const projectbutton = document.getElementById("projectbutton");
const contactbutton = document.getElementById("contactbutton")
const link1 = document.getElementById("contact")

aboutbtn.addEventListener("click", function() {
    about.style.backgroundColor = "rgb(230, 208, 208)";
    list1.style.background = "none";
    link1.style.background = "none";
})

projectbutton.addEventListener("click", function() {
    list1.style.backgroundColor = "rgb(230, 208, 208)";
    about.style.background = "none";
    link1.style.background = "none";
})
contactbutton.addEventListener("click", function() {
    link1.style.backgroundColor = "rgb(230, 208, 208)";
    about.style.background = "none";
    list1.style.background = "none";
})
