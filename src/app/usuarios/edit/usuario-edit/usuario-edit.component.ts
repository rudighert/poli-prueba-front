import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { User } from '../../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss'],
  providers: [UsuariosService]
})
export class UsuarioEditComponent implements OnInit {

  user: User;
  waiting = true;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.usuariosService.getUser(userId).subscribe(response=>{
      this.user = response['data'];
      this.waiting = false;
    });
  }

}
