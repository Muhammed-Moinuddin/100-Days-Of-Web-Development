const tagsElement = document.getElementById("tags");
const textarea = document.getElementById("textarea");



textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)  //Get the element that triggered a specific event
});

function createTags(input){
    console.log(input);
}