function generarImagenes() {
    const contenedor = document.getElementById("cuadricula");
    let personajes = conseguirImagenes();
    personajes.sort(() => Math.random() - 0.5);

    contenedor.innerHTML = ""; 

    personajes.forEach(personaje => {
        const carta = document.createElement("div");
        carta.classList.add("carta");

        const img = document.createElement("img");
        img.src = personaje.img;
        img.alt = personaje.nombre;
        
        img.dataset.original = personaje.img; 

        const info = document.createElement("div");
        info.innerHTML = `<strong>${personaje.nombre}</strong><br><small>${personaje.pelicula}</small>`;

        img.addEventListener("click", () => {
            if (!img.src.includes("miyazaki.jpeg")) {
                img.src = IMAGEN_MIYAZAKI;
            } else {
                img.src = img.dataset.original;
            }
        });

        carta.appendChild(img);
        carta.appendChild(info);
        contenedor.appendChild(carta);
    });
}