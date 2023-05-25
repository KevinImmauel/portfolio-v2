const aboutButton = document.getElementById("ab")
const projectButton = document.getElementById("pb")
const contactButton = document.getElementById("cb")

const aboutPage = document.getElementById("ap")
const projectsPage = document.getElementById("pp")
const contactsPage = document.getElementById("cp")


function ppchange(){
    aboutPage.style.display = "none"
    projectsPage.style.display = "flex"
    contactsPage.style.display = "none"}

function apchange(){
    aboutPage.style.display = "flex"
    projectsPage.style.display = "none"
    contactsPage.style.display = "none"}

function cpchange(){
    aboutPage.style.display = "none"
    projectsPage.style.display = "none"
    contactsPage.style.display = "flex"}