import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
 public View:boolean = false;

  toogleView():void{
    this.View = !this.View;
  }



}
