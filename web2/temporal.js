console.log("hola");

const getData = () => {
    let cargador = document.getElementById("cargador");
    let info = document.getElementById("info");
    cargador.classList.remove("ocultar");
    info.classList.add("ocultar");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            let body = document.getElementById("body");
            let a = '';
            data.forEach(element => {
                a +=
                    `<tr>
                <td>${element["id"]}</td>
                <td>${element["name"]}</td>
                <td>${element["phone"]}</td>
                <td>${element["username"]}</td>
                <td>${element["email"]}</td>
                <td>${element["website"]}</td>
             </tr>`;
            });
            body.innerHTML = a;
            cargador.classList.add("ocultar");
            info.classList.remove("ocultar");
            console.log(data);
        })

    console.log("hola boton");
}

document.getElementById("data").addEventListener("click", getData)

const getAlbum = async () => {
    const peticion = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await peticion.json();
    let a = '';
    data.forEach(res => {
        a += `<p>${res["title"]}</p>`;
    });
    document.getElementById("data-album").innerHTML = a;
    
}

document.getElementById("album").addEventListener("click", getAlbum)