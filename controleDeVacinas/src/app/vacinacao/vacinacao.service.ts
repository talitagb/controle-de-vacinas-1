import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VacinacaoModel } from './vacinacao.model';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<VacinacaoModel[]>(`${environment.api_url}/vacinacao`);
  }

  save(vacinacaoObj: VacinacaoModel){
    return this.httpClient.post<VacinacaoModel>(`${environment.api_url}/vacinacao`, vacinacaoObj);
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.api_url}/vacinacao/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<VacinacaoModel>(`${environment.api_url}/vacinacao/${id}`);
  }

  update(id: number, vacinacaoObj: VacinacaoModel){
    return this.httpClient.patch<VacinacaoModel>(`${environment.api_url}/vacinacao/${id}`, vacinacaoObj);
  }
}
