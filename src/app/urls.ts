
const urlUsuarios = 'http://localhost:3000/usuarios';
const urlPeliculas = 'http://localhost:3000/peliculas';

export const URLs = {
    //usuarios
    urlObtenerUsuarios: `${urlUsuarios}`,
    urlCrearUsuarios: `${urlUsuarios}`,
    urlConsultaUsuarioExistente: `${urlUsuarios}?email=`,
    urlTraerDatosUsuario: `${urlUsuarios}?email=`,
    urlActualizarUsuario: `${urlUsuarios}/`,


    //peliculas
    urlObtenerPeliculas: `${urlPeliculas}`,
    urlCrearPeliculas: `${urlPeliculas}`,
    urlActualizarPelicula: `${urlPeliculas}/`,
    urlEliminarPelicula: `${urlPeliculas}/`,

}