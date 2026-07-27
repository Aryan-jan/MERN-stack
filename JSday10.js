const taskList = document.querySelector("#taskList")

const inputField = document.querySelector("#input")
const btn = document.querySelector("#btn")

    btn.addEventListener("click", () => {
        if (inputField.value.trim() === ""){
            alert("Empty Input is not allowed\nPlease type a task")
            return;
        }

        const list = document.createElement("li")

        const remove = document.createElement("button")
            remove.textContent = "X"
            remove.addEventListener("click", () =>{
                list.remove()
            })

        list.textContent = inputField.value

        list.appendChild(remove)
        taskList.append(list)
        inputField.value = ""
    })