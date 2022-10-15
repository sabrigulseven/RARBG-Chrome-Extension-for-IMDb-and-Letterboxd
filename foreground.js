console.log("foreground start")

//building url
const bookmarbutton = document.getElementsByClassName("micro-button track-event");
let imdblink = bookmarbutton.item(0).getAttribute("href");
let imdbId = imdblink.substring(26, 35);
let rarbgLink = "https://rarbgenter.org/torrents.php?search=" + imdbId;

//button
const button = document.createElement('a');
//button.target='_blank';
button.innerText = "  RARBG";
button.href = rarbgLink;
var p = document.getElementsByClassName('text-link text-footer')[0];
p.appendChild(button);