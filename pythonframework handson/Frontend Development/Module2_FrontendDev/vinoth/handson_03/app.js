import { Courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const displayCourse = (courseList) =>{
    courseGrid.innerHTML = "";

    courseList.forEach((Course) =>{
    const card = document.createElement("article");
    card.classList.add("course-card");
    card.innerHTML = `
    <h3> ${Course.name} </h3>
    <p> ${Course.code} </p>
    <span> ${Course.credits} </span>
    `;
    courseGrid.appendChild(card);
} );

}



const eventbutton = document.querySelector('#explore-button');
const cour  =  document.querySelector('#courses');
eventbutton.addEventListener('click',() => {
    cour.scrollIntoView({
        behavior : 'smooth'
    });
});

const search = document.querySelector("#search-input");
search.addEventListener('input',(event) =>{
    const input = event.target.value.toLowerCase();
    console.log(input);
});