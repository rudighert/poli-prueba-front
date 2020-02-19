import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';
import { User } from '../../user.model';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-usuarios-index',
  templateUrl: './usuarios-index.component.html',
  styleUrls: ['./usuarios-index.component.scss'],
  providers: [UsuariosService]
})
export class UsuariosIndexComponent implements OnInit {

  users: User[] = [];
  headerTable = [
    'email',
    'name',
    'city',
    'edit'
  ];

  dataSource = new MatTableDataSource([]);
  dataTable  = [];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit() {
    this.usuariosService.getUsers().subscribe( response => {
      this.users = response['data'];
      console.log(this.users)
      this.createTable();
    });
  }

  createTable(){
    this.dataTable = [];

    this.users.forEach(user => {
      this.dataTable.push({
        id: user.id,
        email : user.attributes.email,
        name : user.attributes.name,
        city: user.attributes.city
      });
    });

    console.log(this.dataTable);

    this.dataSource = new MatTableDataSource(this.dataTable);

    this.dataSource.sortingDataAccessor = function (data, sortHeaderId) {
      const value = data[sortHeaderId];

      if (typeof value === 'string' && !value.trim()) {
        return value;
      }
      return isNaN(+value) ? value : +value;
    };
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
