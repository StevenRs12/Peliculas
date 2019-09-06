import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Peliculas, Pelicula } from 'src/app/modelos';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  peliculas: Peliculas;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.peliculasService.consultarPeliculas().subscribe((peliculas) => {
      console.log(peliculas, 'peliculas')
      this.peliculas = peliculas;
    });
  }

  reservar(pelicula: Pelicula) {
    console.log(pelicula, 'pelicula');

    if (pelicula.unidadesDisponibles > 0) {


      Swal.fire({
        title: '¿Deseas reservar ' + pelicula.titulo + '?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Reservar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          pelicula.unidadesDisponibles -= 1;
          this.peliculasService.reservarPelicula(pelicula).subscribe(pelicula => {
            this.obtenerPeliculas();
          }
          );
          Swal.fire(
            'reservada!'
          )
        }
      })

    } else {
      Swal.fire({
        position: 'top',
        type: 'error',
        title: 'Esta pelicula no esta disponible',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }
}


