import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {

  imgSelected = './assets/images/funeraria-1.jpg'
  listImages: any[] = [
    {image:'./assets/images/funeraria-5.jpg'},
    {image:'./assets/images/funeraria-7.jpg'},
    {image:'./assets/images/funeraria-2.jpg'},
    {image:'./assets/images/funeraria-1.jpg'}
  ]


  selectImg(image:any){
    this.imgSelected = image
  }


}
