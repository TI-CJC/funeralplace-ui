import { Component, Input } from '@angular/core';
import {
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
@Input() nomeModal: string = 'modal'
}
