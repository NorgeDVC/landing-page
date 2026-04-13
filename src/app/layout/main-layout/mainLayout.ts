import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Home } from "../../features/home/home";
import { Header } from "../header/header";

@Component({
  selector: 'app-main-layout',
  imports: [Footer, Home, Header],
  templateUrl: './mainLayout.html',
  styleUrl: './mainLayout.css',
})
export class MainLayout {

}
