import DadJokeApi from "./scripts/dad-joke-api.js";

let test = new DadJokeApi();

const dadJokeContainerEl = document.querySelector(".dad-joke__container");

const dadJokeEl = document.createElement("h1");

async function createJoke() {
    const joke = await test.getDadJoke();
    dadJokeEl.innerText = joke;
    dadJokeContainerEl.append(dadJokeEl);
}

createJoke();