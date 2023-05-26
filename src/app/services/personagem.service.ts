import { Injectable } from '@angular/core';
import { personagens } from '../data/Personagens';
import { Personagem } from '../interfaces/personagem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {
  personagensArray = personagens;
  personagemSelect:Personagem| null = null
  constructor() { }

  getPersonagem(senha: string) {

     let obj = this.personagensArray.find((x: Personagem) => x.senha === senha);

     if(obj){
      this.personagemSelect = obj;
      return true;
     }
     return false;

  }


}
