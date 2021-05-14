import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { CadastrarCursosComponent } from './pages/private/cursos/cadastrar-cursos/cadastrar-cursos.component';
import { ListarCursosComponent } from './pages/private/cursos/listar-cursos/listar-cursos.component';
import { HomeComponent } from './pages/private/home/home.component';
import { CadastrarProfessorComponent } from './pages/private/professor/cadastrar-professor/cadastrar-professor.component';
import { ListarProfessorComponent } from './pages/private/professor/listar-professor/listar-professor.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PaginaNaoEncontradaComponent } from './pages/public/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent,
  },
  {
    path: 'professor',
    canActivate: [AuthGuardService],
    component:ListarProfessorComponent,
  },
  {
    path: 'professor/:id',
    canActivate: [AuthGuardService],
    component:ListarProfessorComponent,
  },
  {
    path: 'cadastrar-professor/:id', 
    canActivate: [AuthGuardService],
    component: CadastrarProfessorComponent,
    
  },
  {
    path:'cadastrar-cursos',
    canActivate: [AuthGuardService],
    component: CadastrarCursosComponent,
  },
  {
    path:'cadastrar-cursos/:id',
    canActivate: [AuthGuardService],
    component: CadastrarCursosComponent,
  },
  {
    path:'cursos',
    canActivate: [AuthGuardService],
    component: ListarCursosComponent,
  },
 
  {
    path: 'nova-conta',
    component: CadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
