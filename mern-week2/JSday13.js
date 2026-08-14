const bttn = document.querySelector("#bttnJoke")
const jokecontainer = document.querySelector(".jokeContainer")
    bttn.addEventListener("click", () => {
        async function getJoke() {
            jokecontainer.textContent = ''
            try {
                const callJokeAPI = await fetch(`https://official-joke-api.appspot.com/random_joke`)

                const joke = await callJokeAPI.json();
                console.log(joke);

                const { setup, punchline } = joke

                const setupJoke = document.createElement("p")
                const punchlineJoke = document.createElement("p")

                setupJoke.textContent = setup
                punchlineJoke.textContent = punchline

                jokecontainer.append(setupJoke)
                jokecontainer.append(punchlineJoke)


            }   catch (error) {
                console.log(`Didn't got the joke?`, error)
            }
        }

        getJoke();
    })
