import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Eric Rodriguez';
  nombre2: string = 'eRic RoDrIGUez';

  arreglo = [1,2,3,4,5,6,7,8];
  PI: number = Math.PI;
  porcentaje:number = 0.1234;
  salario: number = 1234.5;
  fecha : Date = new Date();
  idioma : string = 'en';

  videoUrl: string = 'https://www.youtube.com/embed/W_0AzVqIEMo';

  valorPromesa = new Promise<string> ((resolve)=>{
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe ={
    nombre:'logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Avenidad simpre viva',
      casa: '20'
      }
  }
}
