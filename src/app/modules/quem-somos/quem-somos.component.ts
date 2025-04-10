import { Component } from '@angular/core';
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {


  imgSelected = './assets/images/logo_funeral_place.png'
  listImages: any[] = [
    {image:'./assets/images/funeraria-7.jpg'},
    {image:'./assets/images/img-funeraria-8.png'},
    {image:'./assets/images/img-funeraria-6.jpg'},
    {image:'./assets/images/funeraria-1.jpg'}
  ]

  ngOnInit() {
    initTE({ Modal, Ripple });
  }

  selectImg(image:any){
    this.imgSelected = image
  }
}
