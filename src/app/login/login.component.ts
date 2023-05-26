import { PersonagemService } from './../services/personagem.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  PersonagemService = inject(PersonagemService);
  route = inject(Router)

      senha = new FormControl('');


      validar(){
        if(this.senha.value){
          let ret = this.PersonagemService.getPersonagem(this.senha.value);
          if(ret){
            this.route.navigate(['personagem']);
          }
        }

      }


}
