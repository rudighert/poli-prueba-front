import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSelectModule,
  MatMenuModule,
  MatIconModule,
  MatChipsModule,
  MatInputModule,
  MatListModule,
  MatSliderModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosIndexComponent } from './usuarios/index/usuarios-index/usuarios-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioFormComponent } from './usuarios/form/usuario-form/usuario-form.component';
import { UsuarioEditComponent } from './usuarios/edit/usuario-edit/usuario-edit.component';
import { UsuarioNewComponent } from './usuarios/new/usuario-new/usuario-new.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuariosIndexComponent,
    UsuarioFormComponent,
    UsuarioEditComponent,
    UsuarioNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatRadioModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
