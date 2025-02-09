import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';


@Component({
  selector: 'app-root',
  standalone: true, // Marca o componente como standalon
  imports: [MainComponent,RouterModule], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'AlugaJa';
}
