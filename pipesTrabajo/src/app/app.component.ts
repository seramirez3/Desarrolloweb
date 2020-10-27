import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-project';

  
  text1 = 'Los pipes son una herramienta de Angular que nos permite transformar visualmente la información, por ejemplo, cambiar un texto a mayúsculas o minúsculas, o darle formato de fecha y hora.';
  text2 = 'Angular trae una serie de pipes por defecto (documentación oficial aquí) pero también nos permite construir nuestros propios pipes. ';
}