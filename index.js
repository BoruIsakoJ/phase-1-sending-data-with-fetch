function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(resp => resp.json())
        .then(data => {
            const bodyEl = document.querySelector('body')
            const divEl = document.createElement('div')
            divEl.innerHTML =`<p>${data.id}</p>`
            bodyEl.appendChild(divEl)
            
        })

        .catch(function (error) {        
            const bodyEl = document.querySelector('body')
            const divEl = document.createElement('div')
            divEl.innerHTML =`<p>${error.message}</p>`
            bodyEl.appendChild(divEl)
            console.log(error.message);
          });
}

submitData("Boru", "isco.jaldy@gmail.com")