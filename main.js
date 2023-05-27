const heroButton = document.getElementById("hb")
const aboutButton = document.getElementById("ab")
const projectButton = document.getElementById("pb")
const contactButton = document.getElementById("cb")

const aboutPage = document.getElementById("ap")
const projectsPage = document.getElementById("pp")
const contactsPage = document.getElementById("cp")
const heroPage = document.getElementById("hp")

const cards = document.getElementsByClassName('card')

function hpchange(){
    aboutPage.style.display = "none"
    heroRespo(x)
    aboutButton.style.backgroundColor = "#000"
    projectsPage.style.display = "none"
    projectButton.style.backgroundColor = "#000"
    heroButton.style.backgroundColor = "#1d1d1d"
    contactsPage.style.display = "none"
    contactButton.style.backgroundColor = "#000"}

function ppchange(){
    aboutPage.style.display = "none"
    heroPage.style.display = "none"
    aboutButton.style.backgroundColor = "#000"
    projectsPage.style.display = "flex"
    projectButton.style.backgroundColor = "#1d1d1d"
    contactsPage.style.display = "none"
    contactButton.style.backgroundColor = "#000"
    heroButton.style.backgroundColor = "#000"}

function apchange(){
    aboutPage.style.display = "flex"
    heroPage.style.display = "none"
    aboutButton.style.backgroundColor = "#1d1d1d"
    projectsPage.style.display = "none"
    projectButton.style.backgroundColor = "#000"
    contactsPage.style.display = "none"
    contactButton.style.backgroundColor = "#000"
    heroButton.style.backgroundColor = "#000"}

function cpchange(){
    aboutPage.style.display = "none"
    heroPage.style.display = "none"
    aboutButton.style.backgroundColor = "#000"
    projectsPage.style.display = "none"
    projectButton.style.backgroundColor = "#000"
    contactsPage.style.display = "flex"
    contactButton.style.backgroundColor = "#1d1d1d"
    heroButton.style.backgroundColor = "#000"}

function openWin(s) {
    window.open(s)
}

function cardsTran(n,m){
    for (let i=n;i<m;i++){
        if (i<6){
            cards[i].style.animationDelay = String((i)*150) + 'ms'
        }else {
            cards[i].style.animationDelay = String((i-5)*150) + 'ms'
        }
    }
}

cardsTran(0,6)
cardsTran(6,12)

var x = window.matchMedia("(max-width: 800px)")

function heroRespo(x) {
    if (x.matches) { // If media query matches
        heroPage.style.display = "block"
    } else {
        heroPage.style.display = "flex"
    }
  }