import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosIndexComponent } from './usuarios/index/usuarios-index/usuarios-index.component';
import { UsuarioNewComponent } from './usuarios/new/usuario-new/usuario-new.component';
import { UsuarioEditComponent } from './usuarios/edit/usuario-edit/usuario-edit.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      { path: '',           redirectTo: 'index', pathMatch: 'full'},
      { path: 'index',      component: UsuariosIndexComponent },
      { path: 'new',      component: UsuarioNewComponent },
      { path: 'edit/:userId',      component: UsuarioEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
