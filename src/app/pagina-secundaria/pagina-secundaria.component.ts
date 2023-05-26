import { PersonagemService } from './../services/personagem.service';
import { Personagem } from './../interfaces/personagem';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-secundaria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-secundaria.component.html',
  styleUrls: ['./pagina-secundaria.component.scss']
})
export class PaginaSecundariaComponent {
personagemService = inject(PersonagemService);
 personagem:Personagem | null = null;

 ngOnInit(){
  this.personagem = this.personagemService.personagemSelect;
 }


}
