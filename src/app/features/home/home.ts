import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Services } from './components/servicios/services';
import { Gallery } from "./components/gallery/gallery";

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Gallery],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
