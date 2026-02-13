//función que sirve para resetear el juego.
function resetearJuego() {
    //pedirle confirmación al usuario
    let confirmacion = confirm("¿Estás seguro de que quieres reiniciar la partida?");

    //recargar la página
    if (confirmacion) {
        window.location.reload();
    }
}