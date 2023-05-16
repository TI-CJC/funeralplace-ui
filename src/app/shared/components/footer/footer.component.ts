import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  itemsMenu: any[] = [
    { nome: 'Home', url:'' },
    { nome: 'Quem somos', url:'' },
    { nome: 'Serviços', url:'' },
  ]
}
