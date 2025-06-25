const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

window.onload = function() {
    mostrarPalabras(palabras);
};


function mostrarPalabras(lista) {
    const listaFrutas = document.getElementById("listado")
    listaFrutas.innerHTML="";
    lista.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra ;
        listaFrutas.appendChild(li);
    });
}

function filtrarPalabras () {
    const input = document.getElementById("filtro").value.trim().toLowerCase();
    const mensajeError = document.getElementById("mensaje");


    if(input === ""){
        mensajeError.textContent="ingrese una palabra";
        return
    }
mensajeError.textContent="";

const palabrasFiltradas = palabras.filter(palabra => palabra.toLowerCase().includes(input));


mostrarPalabras(palabrasFiltradas);
}