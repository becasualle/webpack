import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughEl = document.getElementById("laughImg");
laughEl.src = laughing;
console.log(generateJoke());
