//función que sirve para generar la cuadricula en la que van a salir las imagenes para el juego
function generarImagenes() {

    //recoger la cuadricula del html y los personajes, para despues desordenarlos y ir pintandolos
    const contenedor = document.getElementById("cuadricula");
    let personajes = conseguirImagenes();
    personajes.sort(() => Math.random() - 0.5);

    contenedor.innerHTML = ""; 

    //bucle que recorre cada personaje 
    personajes.forEach(personaje => {
        //crear la carta
        const carta = document.createElement("div");

        //crear la imagen y añadirle los atributos
        const img = document.createElement("img");
        img.src = personaje.img;
        img.alt = personaje.nombre;  
        img.dataset.original = personaje.img; 

        //crear el div con la información de cada personaje
        const info = document.createElement("div");
        info.innerHTML = `<b>${personaje.nombre}</b><br><small>${personaje.pelicula}</small>`;

        //listener para cambiar de imagen al clicar
        img.addEventListener("click", () => {
            if (!img.src.includes("miyazaki.jpeg")) {
                img.src = IMAGEN_MIYAZAKI;
            } else {
                img.src = img.dataset.original;
            }
        });

        //mandar los elementos al html
        carta.appendChild(img);
        carta.appendChild(info);
        contenedor.appendChild(carta);
    });
}