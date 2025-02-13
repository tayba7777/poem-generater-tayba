function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
    strings: " Hold fast to dreams",
    autoStart: true,
    delay: 1,
    cursor:"",
});
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);