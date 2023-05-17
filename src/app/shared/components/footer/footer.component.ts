import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  itemsMenu: any[] = [
    { nome: 'Home', url:'' },
    { nome: 'Quem somos', url:'/quem-somos' },
    { nome: 'Contate-nos', url:'/contate-nos' },
  ]
  @Input() main: any;

  public scrollToElement(element:any): void {

    element.scrollIntoView({

      behavior: "smooth",

      block: "start",

      inline: "nearest"

    });

  }
}
