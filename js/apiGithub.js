function apiGithub() {
    //definir el usuario de github
    const nombreUsuario = "Sendoa6"; 
    const urlAPI = `https://api.github.com/users/${nombreUsuario}`;

    //recoger el contenedor del html
    const contenedorGithub = document.getElementById("footer-github");

    //llamada a la api de github
    fetch(urlAPI)
        //recoger la respuesta de la api
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Usuario no encontrado");
            }
            return respuesta.json();
        })
        //si existen datos pintarlos en el html
        .then(datos => {
            contenedorGithub.innerHTML = ""; 
            
            //crear los datos de github
            const githubDatos = `
                <div>
                    <a href="${datos.html_url}" target="_blank" title="Ir al perfil de GitHub">
                        <img src="${datos.avatar_url}" alt="Foto de perfil">
                    </a>
                    <div>
                        <p><b>Desarrollador:</b> ${datos.name || datos.login}</p>
                        <p><b>Repositorios públicos:</b> ${datos.public_repos}</p>
                    </div>
                </div>
            `;
            //mandar los datos al html
            contenedorGithub.innerHTML = githubDatos;
        })
        //En caso de error que no aparezca nada
        .catch(error => {
            console.log("Error API GitHub:", error); 
            contenedorGithub.innerHTML = ""; 
        });
}