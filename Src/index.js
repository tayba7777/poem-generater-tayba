function displayPoem(response) {
     console.log("poem generatated");

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
    });
    }
    
    function generatePoem(event) {
        event.preventDefault();

        let instructionsInput = document.querySelector("#user-instructions");
        let apikey = "dcao4c6bt0e0cdb240e9362eff93da7f";
        let context = 
        "You are a romantic Poem expert and love to write short poems. you mission is to generate a 4 line poem and separte each line with A <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'sheCodes AI' inside a <strong> element at the end of the poem";
        let prompt = `User instructions: Generate a poem about ${instructionsInput}`;
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

        let poemElement = document.querySelector("#poem");
        poemElement.classList.remove = ("hidden");
        poemElement.innerHTML = `<div class="generating"> Generating a poem about ${instructionsInput.value}</div>`;

        console.log("Generating poem");
        console.log(`Prompt: ${prompt}`);
        console.log(`Context: ${context}`);
        
        axios.get(apiUrl).then(displayPoem);
    }


let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);