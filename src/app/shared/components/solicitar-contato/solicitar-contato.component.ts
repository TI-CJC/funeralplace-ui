import { Component } from '@angular/core';
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-solicitar-contato',
  templateUrl: './solicitar-contato.component.html',
  styleUrls: ['./solicitar-contato.component.scss']
})
export class SolicitarContatoComponent {
  nomeModal = 'modal'
  ngOnInit() {
    initTE({ Modal, Ripple });
  }
}
