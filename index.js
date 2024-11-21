//id selector
const content=document.querySelector("#content")

//loading page
windows.addEventListener("load", () => {
    getUsers();
})

function getUsers() {
    let html = ""

    fetch("https://bscs3a-api-crud-jqqr.onrender.com/api/members", {mode: "cors"})
    // fetch("http://localhost:3610/api/members", {mode: "cors"})
    .then(response => {
        console.log(response)
        return response.json()
    })

    .then((data) => {
        console.log(data)
        data.forEach((element) => {
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) => {
        copnsole.log(error)
    })

}
