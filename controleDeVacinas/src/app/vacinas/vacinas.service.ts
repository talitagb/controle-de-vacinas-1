import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VacinasModel } from './vacinas.model';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {

  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<VacinasModel[]>(`${environment.api_url}/vacinas`);
  }

  save(vacinasObj: VacinasModel){
    return this.httpClient.post<VacinasModel>(`${environment.api_url}/vacinas`, vacinasObj);
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/vacinas/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<VacinasModel>(`${environment.api_url}/vacinas/${id}`);
  }

  update(id: number, vacinasObj: VacinasModel){
    return this.httpClient.patch<VacinasModel>(`${environment.api_url}/vacinas/${id}`, vacinasObj);
  }
}
