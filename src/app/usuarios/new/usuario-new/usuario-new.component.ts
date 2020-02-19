import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.scss']
})
export class UsuarioNewComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

}
