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
    {image:'./assets/images/sala-funeral.png'},
    {image:'./assets/images/sala2-funeral.png'},
    {image:'./assets/images/sala3-funeral.png'},
    {image:'./assets/images/funeraria-1.jpg'}
  ]

  ngOnInit() {
    initTE({ Modal, Ripple });
  }

  selectImg(image:any){
    this.imgSelected = image
  }
}
