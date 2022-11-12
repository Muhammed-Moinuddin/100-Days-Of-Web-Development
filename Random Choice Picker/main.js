const textarea = document.getElementById("textarea");
const tagsDiv = document.getElementById("tags");

textarea.addEventListener("keyup" , (e) => {
  createTags(e.target.value);

  if(e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 10)
  
  randomSelect();
    }

});

function createTags(input){
  const arrayOfTags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
  
  tagsDiv.innerHTML = "";

  arrayOfTags.forEach(tag => {
    const tagsElement = document.createElement("span");
    tagsElement.classList.add("tag");
    tagsElement.innerText = tag;
    tagsDiv.appendChild(tagsElement);
  });  
}

function randomSelect(){

  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag)
    }, 100);

  }, times * 100);
}

function pickRandomTag(){
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag){
  tag.classList.remove("highlight")
}