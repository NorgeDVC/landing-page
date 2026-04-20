import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
 public View:boolean = false;

  toogleView():void{
    this.View = !this.View;
  }



}
