import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuariosModel } from './usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<UsuariosModel[]>(`${environment.api_url}/usuarios`);
  }

  save(usuariosObj: UsuariosModel){
    return this.httpClient.post<UsuariosModel>(`${environment.api_url}/usuarios`, usuariosObj);
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/usuarios/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<UsuariosModel>(`${environment.api_url}/usuarios/${id}`);
  }

  update(id: number, usuariosObj: UsuariosModel){
    return this.httpClient.patch<UsuariosModel>(`${environment.api_url}/usuarios/${id}`, usuariosObj);
  }
}
