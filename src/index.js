import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/school.svg';

const img = document.getElementById("laughImg");
img.src = laughing;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke(); 