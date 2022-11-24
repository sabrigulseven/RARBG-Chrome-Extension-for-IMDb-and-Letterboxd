console.log("imdb start")

let imdbId = getImdbId();
let rarbgLink = "https://rarbgenter.org/torrents.php?search=" + imdbId;

const button = buttonRarbg(rarbgLink);

var div = openDiv();
var p = document.getElementsByClassName('sc-11c0820-3 imLyvv')[1];

div.appendChild(button);
p.appendChild(div);


function getImdbId() {
    let imdblink = window.location.href;
    return imdblink.substring(27, 37);
}

function buttonRarbg(rarbgLink) {
    const button = document.createElement('a');
    //button.target='_blank';
    button.className = "ipc-link ipc-link--baseAlt ipc-link--inherit-color";
    button.innerText = "RARBG";
    button.href = rarbgLink;
    return button;
}

function openDiv() {
    var div = document.createElement('div');
    div.className = 'sc-f172496b-1 kXVeCj';
    //div.innerHTML = ' <div class="sc-f172496b-1 kXVeCj">  Text  </div>';
    return div;
}