import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { PaginaSecundariaComponent } from './pagina-secundaria/pagina-secundaria.component';

export const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'personagem',component:PaginaSecundariaComponent}

];
