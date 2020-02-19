import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsers(){

    const url = `${environment.api}/users`;
    const params = new HttpParams();

    return this.http.get(url, { params: params }).pipe(
      map(response => response)
    );
  }

  getUser(userId){

    const url = `${environment.api}/users/${userId}`;
    const params = new HttpParams();

    return this.http.get(url, { params: params }).pipe(
      map(response => response)
    );
  }

  upsertUser(body){
    const url = `${environment.api}/users`;
    return this.http.post(url, body).pipe(
      map(response => response)
    );
  }

  cities(){
    return [
      {id: 1, name: 'Santiago'},
      {id: 2, name: 'Ciudad de México'},
      {id: 3, name: 'Lima'}
    ];
  }
}



