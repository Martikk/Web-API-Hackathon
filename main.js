import DadJokeApi from "./scripts/dad-joke-api.js";

async function refreshDadJoke() {     
    const dadJokeEl = document.querySelector(".dad-joke__text");

    dadJokeEl.innerText = await new DadJokeApi().getDadJoke();
}

const buttonEl = document.querySelector(".btn--new-joke");
buttonEl.addEventListener("click", refreshDadJoke);

refreshDadJoke();