// Arreglo global para almacenar los nombres
let listaAmigos = [];
let ultimoSorteado = null;

// Agrega un amigo con validación
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación de campo vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el nombre ya existe
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        input.value = "";
        return;
    }

    // Agregar al array
    listaAmigos.push(nombre);

    // Limpiar input
    input.value = "";

    // Mostrar la lista actualizada
    mostrarListaDeAmigos();
}

// Muestra todos los amigos como <li>
function mostrarListaDeAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista visual

    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

// Sortea un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (listaAmigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    let indiceAleatorio;
    let intentos = 0;

    do {
        indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        intentos++;
    } while (listaAmigos[indiceAleatorio] === ultimoSorteado && intentos < 10);

    const amigoSorteado = listaAmigos[indiceAleatorio];
    ultimoSorteado = amigoSorteado;

    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}

// Limpia todo: array, listas y resultado
function reiniciar() {
    listaAmigos = [];
    ultimoSorteado = null;

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}
