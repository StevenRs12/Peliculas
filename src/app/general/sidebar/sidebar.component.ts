import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/modelos';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Input() ususarioSesion: Usuario;

  constructor() { }

  ngOnInit() {
    console.log(this.ususarioSesion,'side');
    
  }

  cerrarSesion(){
    sessionStorage.removeItem('ususarioSesion');
    console.log('cerro')
  }

}
