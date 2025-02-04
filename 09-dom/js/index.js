'use strict';

// demo querySelector and querySelectorAll
const h1InnerText = document.querySelector('h1').innerText;
console.log("the inner text of the first h1 is", h1InnerText);

// querySelector only gets first element
document.querySelector("div")

// querySelectorAll gets all the matching things:
document.querySelectorAll("li") 


// demo updating attributes of html

// update the title (first h1 tag)
document.querySelector('h1').textContent = "I am dynamically changing the main h1!";

// update the image in the puppy section
document.querySelector("#puppySection img").src="img/husky.jpg";
document.querySelector("#puppySection img").alt="a photo of an adult husky dog"; 

// update header
const headerElem = document.querySelector('header');
headerElem.classList.add('bg-dark', 'text-danger');
headerElem.classList.remove('text-white');


// demo creating and adding a footer
// create a <footer> element
const footerElem = document.createElement('footer');

// create a paragraph tag to go in the footer
const footerPElem = document.createElement('p');
footerPElem.textContent = 'This footer has been generated!';

// add the paragraph to the footer
footerElem.appendChild(footerPElem);

// then add the footer to the bottom of the <body>
document.querySelector('body').appendChild(footerElem);



//////////////// Interactivity

// demo listening to a click of the button to change the dog image
const puppyImageElem = document.querySelector("#puppySection img")

const puppyButtonElem = document.querySelector("#puppySection button");

// when the user clicks the button, run the given function
puppyButtonElem.addEventListener('click', function(event){
  // this code runs when the user clicks the button

  if(puppyImageElem.src.endsWith("img/husky.jpg")){
    // if the image was "husky.jpg", switch to puppy.jpg
    puppyImageElem.src="img/puppy.jpg";
    puppyImageElem.alt="a photo of a puppy husky dog"; 
  } else{
    // if the image wasn't "husky.jpg", make it husky.jpg
    puppyImageElem.src="img/husky.jpg";
    puppyImageElem.alt="a photo of an adult husky dog"; 
  }
})




/////// Demo of song lists (Data, render, event steps)

// DATA: My data is here (with starter info)
const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  }
];

// RENDER: Functions for rendering the song info as order lits
// and putting in the page

// create a <li> with an <a> inside pointing to youtube
function createSongListItem(songObj){
  const newLinkElem = document.createElement('a');
  newLinkElem.href = songObj.youtubeUrl;
  newLinkElem.textContent = songObj.artist + " - " + songObj.title;

  // create list item with that <a> tag
  const newLiElem = document.createElement('li');
  newLiElem.appendChild(newLinkElem);

  return newLiElem;
}

// create <h2>, <ol> (with songListItems)
// and then stick it in the html page
function renderSongListSection(songArray){
  // make <h2> of top so many songs
  const subtitleElem = document.createElement('h2');
  subtitleElem.textContent = "Top " + songArray.length + " Songs";

  // make the <ol>
  const olElem = document.createElement('ol');
  // fill the <ol> with songListItems
  for(const aSongObj of songArray){
    const theLi = createSongListItem(aSongObj);

    // add item to the list
    olElem.appendChild(theLi);
  }

  // put elements on page
  const dataSectionElem = document.querySelector('#dataSection');
  dataSectionElem.appendChild(subtitleElem);
  dataSectionElem.appendChild(olElem)
}


// EVENT: listen for the submit button being pressed,
// update the songArray
// re-render the song info
const formElem = document.querySelector('#formSection form');
formElem.addEventListener('submit', function(event){
  // prevent default old style html submit and reload
  event.preventDefault();

  // get the user input
  const artistValue = document.querySelector("#artistInput").value;
  const titleValue = document.querySelector("#titleInput").value;
  const youtubeValue = document.querySelector("#urlInput").value;

  // update the state object
  // make new song object
  const newSongObj = { 
    artist: artistValue, 
    title: titleValue, 
    youtubeUrl: youtubeValue 
  };
  // add song to state
  songArray.push(newSongObj);

  // re-render the dataSection
  //clear the old song list section
  document.querySelector('#dataSection').innerHTML = "";
  // render the new version
  renderSongListSection(songArray);
})



// Run the render function(s) once just to get the initial values displayed
//clear the old song list section
document.querySelector('#dataSection').innerHTML = "";
// render the new version
renderSongListSection(songArray);
