const bttn = document.querySelector(`#bttn`)
const background = document.querySelector(`#background`)

    bttn.addEventListener(`click`, () => {

        background.textContent = ''

        const colors = [`red`, `blue`, `green`, `yellow`, `purple`]
        const randomizer = Math.floor(Math.random() * colors.length)
        const randomColor = colors[randomizer]
        const p = document.createElement("p")

        p.textContent = randomColor

        background.append(p)

        background.style.backgroundColor = randomColor
    })

const bttnFact = document.querySelector("#bttnFact")
const factContainer = document.querySelector(".Container")

    bttnFact.addEventListener("click", () => {
        async function getFact() {
            factContainer.textContent = ''
            try {
                const response = await fetch(`https://catfact.ninja/fact`)

                const factData = await response.json();
                console.log(factData);

                const { fact, length } = factData

                const factText = document.createElement("p")
                const lengthText = document.createElement("p")

                factText.textContent = fact
                lengthText.textContent = length

                factContainer.append(factText)
                factContainer.append(lengthText)


            }   catch (error) {
                console.log(`Didn't got the fact?`, error)
            }
        }

        getFact();
    })
