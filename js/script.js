let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://images-na.ssl-images-amazon.com/images/I/71Djqom1jRL.jpg",
"https://images-na.ssl-images-amazon.com/images/I/91wkAbGa+2L.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71vID+no-OL.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71Djqom1jRL.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81bYmH9S-rL.jpg",
"https://images-na.ssl-images-amazon.com/images/I/91wkAbGa+2L.jpg"

];
function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer)
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}