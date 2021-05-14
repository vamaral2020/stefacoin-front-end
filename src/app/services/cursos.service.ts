import { Mensagem } from './../models/mensagem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/stefanini/curso'

@Injectable({
  providedIn: 'root'
})
export class CursosService{

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<Cursos[]>(URL)
  }
  obter(){

  }
  incluir(cursos: Cursos): Observable<Mensagem>{
    return this.httpClient.post<Mensagem>(URL, cursos)

  }
  alterar(cursos: Cursos): Observable<Mensagem>{
    return this.httpClient.put<Mensagem>(`${URL}/${cursos.id}`, cursos)

  }

  excluir(id:any) {
    return this.httpClient.delete(`${URL}/${id}`)
  }

}

