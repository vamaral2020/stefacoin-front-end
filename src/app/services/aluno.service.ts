import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { Mensagem } from '../models/mensagem';

const URL = 'http://localhost:3000/stefanini/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  listar(){
    
    return this.httpClient.get<Aluno[]>(`${URL}`);
  }

  obter() {}

  incluir(aluno: Aluno): Observable<Mensagem> {
    return this.httpClient.post<Mensagem>(URL, aluno);
    
  }

  alterar(aluno:Aluno): Observable<Mensagem>{
    return this.httpClient.put<Mensagem>(`${URL}/${aluno.id}`, aluno)

  }

  excluir(id:any) {
    return this.httpClient.delete(`${URL}/${id}`)
  }
}
