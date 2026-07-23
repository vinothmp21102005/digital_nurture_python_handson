import { Courses } from "./data.js";

// Task 1: ES6+ Syntax Practice
Courses.forEach(course => {
    const { name, credits } = course;
});

const formattedCourses = Courses.map(course => `${course.code} — ${course.name} (${course.credits} credits)`);
console.log(formattedCourses);

const highCreditCourses = Courses.filter(course => course.credits >= 4);
console.log(`Courses with >= 4 credits: ${highCreditCourses.length}`);

const totalCredits = Courses.reduce((sum, course) => sum + course.credits, 0);
console.log(`Total credits: ${totalCredits}`);

// Task 2: DOM Selection & Dynamic Rendering
const courseGrid = document.querySelector(".course-grid");
const totalCreditsEl = document.querySelector("#total-credits");

const displayCourse = (courseList) => {
    courseGrid.innerHTML = "";

    courseList.forEach((course) => {
        const { name, code, credits, grade } = course;
        const card = document.createElement("article");
        card.classList.add("course-card");
        
        // Add data attribute for event delegation
        card.dataset.name = name;
        card.dataset.grade = grade;
        
        card.innerHTML = `
            <h3>${name}</h3>
            <p>${code}</p>
            <span>${credits} Credits</span>
        `;
        courseGrid.appendChild(card);
    });
    
    // Update total credits paragraph
    const currentTotal = courseList.reduce((sum, c) => sum + c.credits, 0);
    totalCreditsEl.textContent = `Total Credits: ${currentTotal}`;
}

// Initial render
let currentCourses = [...Courses];
displayCourse(currentCourses);

// Task 3: Event Listeners & Interactivity
const exploreButton = document.querySelector('#explore-button');
const coursesSection = document.querySelector('#courses');
exploreButton.addEventListener('click', () => {
    coursesSection.scrollIntoView({
        behavior: 'smooth'
    });
});

const search = document.querySelector("#search-input");
search.addEventListener('input', (event) => {
    const input = event.target.value.toLowerCase();
    currentCourses = Courses.filter(course => course.name.toLowerCase().includes(input));
    displayCourse(currentCourses);
});

const sortButton = document.querySelector("#sort-credits");
sortButton.addEventListener('click', () => {
    currentCourses.sort((a, b) => b.credits - a.credits);
    displayCourse(currentCourses);
});

// Event delegation
courseGrid.addEventListener('click', (event) => {
    const card = event.target.closest('.course-card');
    if (card) {
        alert(`Course: ${card.dataset.name}\nGrade: ${card.dataset.grade}`);
    }
});