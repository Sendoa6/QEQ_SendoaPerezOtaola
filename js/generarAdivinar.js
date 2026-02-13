function generarAdivinar() {
    const personajes = conseguirImagenes();

    const indiceAleatorio = Math.floor(Math.random() * personajes.length);
    const personajeElegido = personajes[indiceAleatorio];
    const contenedor = document.getElementById("personaje-adivinar");
    contenedor.innerHTML = "";

    const img = document.createElement("img");
    img.src = personajeElegido.img;
    img.alt = "Personaje a adivinar";
    img.classList.add("objetivo");

    const info = document.createElement("div");
    info.innerHTML = `<strong>${personajeElegido.nombre}</strong><br><small>${personajeElegido.pelicula}</small>`;

    contenedor.appendChild(img);
    contenedor.appendChild(info);
}