import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { appConfig } from '../../app.config';
import { FormularioComponent } from "../formulario/formulario.component";


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

}

