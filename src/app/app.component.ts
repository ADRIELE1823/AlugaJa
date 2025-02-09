import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true, // Marca o componente como standalone
  imports: [MainComponent], // Importa o RouterOutlet para que as rotas funcionem
  templateUrl: './app.component.html', // Link para o HTML
  styleUrls: ['./app.component.css'] // Link para o CSS
})
export class AppComponent {
  title = 'AlugaJa';
}
