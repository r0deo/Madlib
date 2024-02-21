// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

let button = document.getElementById('lib-button');

button.addEventListener('click', makeMadLib);


// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

function makeMadLib() {
  let noun = document.getElementById('noun').value;
  let adjective = document.getElementById('adjective').value;
  let person = document.getElementById('person').value;

  let story = `${person} really likes ${adjective} ${noun}.`;

  let storyPart = document.getElementById("story");
  storyDiv.innerText = story;
}