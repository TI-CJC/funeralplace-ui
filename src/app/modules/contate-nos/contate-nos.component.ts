import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-contate-nos',
  templateUrl: './contate-nos.component.html',
  styleUrls: ['./contate-nos.component.scss']
})
export class ContateNosComponent {

  formContato!: FormGroup;
  statusEmail = '';
  submit = false;

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
    destinatario:['funeraria@jardimdacolina.com.br', Validators.required]
  })
}

get form(): { [key: string]: AbstractControl } {
  return this.formContato.controls;
}

sendEmail(){
  console.log(this.formContato.getRawValue());
  this.submit = true;
  if(this.formContato.valid){
    this.statusEmail = 'enviando'

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
