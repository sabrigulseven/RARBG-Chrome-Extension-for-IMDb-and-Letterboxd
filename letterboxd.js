console.log("foreground start")

let rarbgLink = url();
const button = buttonMake(rarbgLink);

var p = document.getElementsByClassName('text-link text-footer')[0];

p.appendChild(button);
flagRemove();

function buttonMake(rarbgLink) {
    const button = document.createElement('a');
    //button.target='_blank';
    button.innerText = "   RARBG";
    button.href = rarbgLink;
    button.className= "micro-button track-event";
    return button
}

function url() {
    const bookmarbutton = document.getElementsByClassName("micro-button track-event");
    let imdblink = bookmarbutton.item(0).getAttribute("href");
    let imdbId = imdblink.substring(26, 36).replace("/","");
    let rarbgLink = "https://rarbgenter.org/torrents.php?search=" + imdbId;
    return rarbgLink;
}

function flagRemove() {
    var flag = document.getElementsByClassName('block-flag-wrapper show-on-hover')[0];
    flag.remove();
}