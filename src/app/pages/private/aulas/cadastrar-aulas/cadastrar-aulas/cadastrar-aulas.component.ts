import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-cadastrar-aulas',
  templateUrl: './cadastrar-aulas.component.html',
  styleUrls: ['./cadastrar-aulas.component.css']
})
export class CadastrarAulasComponent implements OnInit {
  professores: Professor[];
  constructor() { }

  ngOnInit(): void {
  }

  
   /* aulas: new FormControl({
     nomeAula: new FormControl(null),
     duracao: new FormControl(null),
     idCurso: new FormControl(null),
     topicos: new FormControl(null),
   })*/
   

}
