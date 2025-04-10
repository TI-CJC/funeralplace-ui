import { Component } from '@angular/core';
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listItensPrincipais: any[] = [
    {
      image:'./assets/images/funeraria-5.jpg',
      txt: 'Salas de velórios especiais'
    },
    {
      image:'./assets/images/img-funeraria-8.png',
      txt: 'Salas de estar climatizadas'
    },
    {
      image:'./assets/images/funeraria-2.jpg',
      txt: 'Espaço de 330 m² de área construída'
    },
    {
      image:'./assets/images/funeraria-1.jpg',
      txt: 'Serviços de vigilância por câmeras 24 h'
    }
  ];
  nomeModal = 'modal'

  ngOnInit() {
    initTE({ Modal, Ripple });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
