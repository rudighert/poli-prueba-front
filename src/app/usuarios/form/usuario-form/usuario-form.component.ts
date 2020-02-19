import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
  providers: [UsuariosService]
})
export class UsuarioFormComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  buttonText = 'Guardar';

  cities = [
    {id: 1, name: 'Santiago'},
    {id: 2, name: 'Ciudad de México'},
    {id: 3, name: 'Lima'}
  ];

  keys = [
    'name',
    'email',
    'location_id'
  ];

  controlForm: FormGroup;
  sendingData = false;
  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.user);
    this.createForm();
  }

  createForm(){
    let location_id = null;
    if(this.user.attributes.city && this.user.attributes.city!==''){
      location_id = this.cities.find(x => x.name === this.user.attributes.city).id;
    }

    console.log(location_id);

    this.controlForm = this.fb.group({
      id:           this.user.id,
      name:         this.user.attributes.name,
      email:        this.user.attributes.email,
      city:         this.user.attributes.city,
      location_id:  location_id
    });

  }

  saveData(){

    this.usuariosService.upsertUser(this.controlForm.value).subscribe(response=>{
      this.router.navigate(['/usuarios']);
    });

  }

}
