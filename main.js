import DadJokeApi from "./scripts/dad-joke-api.js";


// let test = new DadJokeApi();

// const dadJokeContainerEl = document.querySelector(".dad-joke__container");

// const dadJokeEl = document.createElement("h1");

// async function createJoke() {
//     const joke = await test.getDadJoke();
//     dadJokeEl.innerText = joke;
//     dadJokeContainerEl.append(dadJokeEl);
// }


// createJoke();


    const dadJokeContainerEl = document.querySelector(".dad-joke__container");

    const dadJokeEl = document.createElement("p");
    dadJokeEl.classList.add("dad-joke__text");

    dadJokeEl.innerText = await new DadJokeApi().getDadJoke();

    dadJokeContainerEl.append(dadJokeEl);


async function refreshDadJoke(e) {
    e.preventDefault();

    const dadJokeContainerEl = document.querySelector(".dad-joke__container");
     
    const dadJokeEl = document.querySelector("dad-joke__text");

    dadJokeEl.innerText = await new DadJokeApi().getDadJoke();

    dadJokeContainerEl.append(dadJokeEl);
}


const buttonEl = document.querySelector(".btn--new-joke");
buttonEl.addEventListener("click", refreshDadJoke);
