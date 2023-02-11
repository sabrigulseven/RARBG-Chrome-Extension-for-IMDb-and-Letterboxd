console.log("imdb start")

let imdbId = getImdbId();
let rarbgLink = "https://rarbgenter.org/torrents.php?search=" + imdbId;

const button = buttonRarbg(rarbgLink);

var div = openDiv();
//var p = document.getElementsByClassName('sc-11c0820-3 hwmGqL')[1]; // classname of all block
//var p = getElementByXpath('//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[1]/div/div[2]')
var p = document.querySelector('[data-testid="hero-subnav-bar-right-block"]')



div.appendChild(button);
p.appendChild(div);


function getImdbId() {
    let imdblink = window.location.href;
    let imdbId = imdblink.substring(27, 37).replace("/","");
    return imdbId;
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
    div.className = 'sc-f172496b-1 gPdlbt';  // Classname of ImdbPro
    //div.innerHTML = ' <div class="sc-f172496b-1 kXVeCj">  Text  </div>';
    return div;
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }