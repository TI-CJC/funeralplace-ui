import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  imgSelected = './assets/images/logo_funeral_place.png'
  listImages: any[] = [
    {image:'./assets/images/produto-1.jpg'},
    {image:'./assets/images/produto-2.jpg'},
    {image:'./assets/images/produto-3.jpg'},
    {image:'./assets/images/produto-4.jpg'},
  ]
  listImagesUrnas: any[] = [
    {image:'./assets/images/produto-5.jpg'},
    {image:'./assets/images/produto-6.jpg'},
    {image:'./assets/images/produto-7.jpg'},
    {image:'./assets/images/produto-8.jpg'},
    {image:'./assets/images/produto-9.jpg'},
  ]

  selectImg(image:any){
    this.imgSelected = image
  }
}
