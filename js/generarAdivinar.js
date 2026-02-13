//funcion para generar el personaje a adivinar
function generarAdivinar() {
    //cargar todos los personajes
    const personajes = conseguirImagenes();

    //elegir un personaje de forma aleatoria
    const indiceAleatorio = Math.floor(Math.random() * personajes.length);
    const personajeElegido = personajes[indiceAleatorio];

    //recoger el contenedor donde vamos a mandar el personaje aleatorio
    const contenedor = document.getElementById("personaje-adivinar");
    contenedor.innerHTML = "";

    //creamos la imagen del personaje a adivinar
    const img = document.createElement("img");
    img.src = personajeElegido.img;
    img.alt = "Personaje a adivinar";
    img.classList.add("objetivo");

    //creamos la información del personaje a adivinar
    const info = document.createElement("div");
    info.innerHTML = `<b>${personajeElegido.nombre}</b><br><small>${personajeElegido.pelicula}</small>`;

    //mandar los datos al html
    contenedor.appendChild(img);
    contenedor.appendChild(info);
}