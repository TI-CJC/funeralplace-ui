import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  itemsMenu: any[] = [
    {nome:"Home", url: "/"},
    {nome:"Servicos", url: "servicos"},
    {nome:"Produtos", url: "produtos"},
    {nome:"Quem somos", url: "quem-somos"},
    {nome:"Contate-nos", url: "contate-nos"},
  ]
  @Input() main: any;

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
