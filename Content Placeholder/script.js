const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const personName = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="laptop">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    personName.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08, 2022'

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
    animated_bg_text.forEach(bg => bg.classList.remove("animated-bg-text"))
}