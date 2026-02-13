function resetearJuego() {
    let confirmacion = confirm("¿Estás seguro de que quieres reiniciar la partida?");

    if (confirmacion) {
        window.location.reload();
    }
}