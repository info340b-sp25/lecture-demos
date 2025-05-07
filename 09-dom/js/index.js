'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"},
];

function createSongListItem(songObj) {
  const linkElem = document.createElement('a');
  linkElem.href = songObj.youtubeUrl;
  linkElem.textContent = songObj.artist + '-' + songObj.title;

  const listElem = document.createElement('li');
  listElem.appendChild(linkElem);

  return listElem;
}

function renderSongList() {
  const dataSectionElem = document.querySelector('#dataSection');
  const olElem = document.createElement('ol');
  for (const songObj of songArray) {
    const listElem = createSongListItem(songObj);
    olElem.appendChild(listElem);
  }
  dataSectionElem.appendChild(olElem);
  console.log(dataSectionElem);
}


const formElem = document.querySelector('#formSection form');
formElem.addEventListener('submit', function(event){
  event.preventDefault();

  const artistValue = document.querySelector("#artistInput").value;
  const titleValue = document.querySelector("#titleInput").value;
  const youtubeValue = document.querySelector("#urlInput").value;

  const newSongObj = { 
    artist: artistValue, 
    title: titleValue, 
    youtubeUrl: youtubeValue 
  };

  document.querySelector('#dataSection').innerHTML = "";
  songArray.push(newSongObj);

  renderSongList();
})


// const puppyImg = document.querySelector("#puppySection img");
// console.log(puppyImg);
// console.log(puppyImg.src);
// puppyImg.src = "img/husky.jpg";
// puppyImg.alt = "A photo of a fully grown adult husky <3"
// puppyImg.classList.add('p-5');
// console.log(puppyImg.alt);

const songHeader = document.querySelector("#dataSection h2");
console.log(songHeader);
songHeader.innerText = "I'm soooooo happpy 💖"

const footerElem = document.createElement("footer");
const footerPElem = document.createElement("p");
footerPElem.textContent = "This is a generated footer!"

footerElem.appendChild(footerPElem);
document.querySelector('body').appendChild(footerElem);


const showingAdultDog = false;
function renderDogImage() {
  const dogImg = document.querySelector("#puppySection img");
  if (showingAdultDog) {
    dogImg.src = "img/husky.jpg";
    dogImg.alt = "A photo of a fully grown adult husky <3"
  } else {
    dogImg.src = "img/puppy.jpg";
    dogImg.alt = "A cute baby husky";
  }
}


const puppyButton = document.querySelector('#puppySection button');
puppyButton.addEventListener('click', function(event) {
  showingAdultDog = !showingAdultDog;
  renderDogImage();
  console.log("got a click!");
})

