import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  initTE,
} from "tw-elements";
import { EmailService } from '../../services/email.service';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
@Input() nomeModal: string = 'modal'

formContato!: FormGroup;
statusEmail = '';
constructor(
  private formBuilder:FormBuilder,
  private serviceEmail: EmailService
){}

ngOnInit(){
  this.createForm();
}

createForm(){
  this.formContato = this.formBuilder.group({
    name:['', Validators.required],
    email:['',Validators.required],
    mensagem:['', Validators.required],
    phone:['', Validators.required],
    assunto:['', Validators.required],
    destinatario:['almir.junior@jardimdacolina.com.br', Validators.required]
  })
}

sendEmail(){
  console.log(this.formContato.getRawValue());
  this.statusEmail = 'enviando'
  if(this.formContato.valid){

    const body = this.formContato.getRawValue();
    console.log(body);

    this.serviceEmail.postEmail(body).subscribe({
      next:(response:any) =>{
        console.log(response);
        this.statusEmail = 'enviado'
      },error:(err:any)=>{
        console.log(err);
        this.statusEmail = ''
      },
      complete:()=>{

      }
    })
  }
}

}
