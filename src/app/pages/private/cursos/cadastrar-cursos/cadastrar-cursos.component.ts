import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CursosService } from 'src/app/services/cursos.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfessorDropdownService } from 'src/app/models/professor-dropdown';
import { ProfessorService } from 'src/app/services/professor.service';
import { Cursos } from 'src/app/models/cursos';

@Component({
  selector: 'app-cadastrar-cursos',
  templateUrl: './cadastrar-cursos.component.html',
  styleUrls: ['./cadastrar-cursos.component.css']
})
export class CadastrarCursosComponent implements OnInit {
  professores: ProfessorDropdownService[]
  cursos: Cursos;

   cadastroForm:FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
    idProfessor: new FormControl(null, Validators.required),
 
  });

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private cursoServices: CursosService,
    private formBuilder: FormBuilder,
    private professor: ProfessorService,
  ) { }
  ngOnInit(): void {

   this.professor.listar().subscribe(dados => this.professores =dados)

}
cadastrarCurso(){
    this.cursos = {
      nome: this.cadastroForm.get('nome').value,
      descricao: this.cadastroForm.get('descricao').value,
      idProfessor: this.cadastroForm.get('idProfessor').value,
    }

    this.cursoServices.incluir(this.cursos).subscribe(
      
      (response)=>{
        this.toastr.success(response.mensagem)
    }, (err)=>{
        this.toastr.error(err.mensagem)
    })
    console.log(this.cadastroForm)
}

excluir(id: number){
  if(confirm("Voce deseja realmente excluir esse curso")){
    this.cursoServices.excluir(id).subscribe(()=>{
    this.toastr.success('cursos excluido com sucesso');
    this.ngOnInit();
    },
    err=>this.toastr.error(err.error.message))

  }

}
editar(id: any){
  this.cursoServices.alterar(id).subscribe(
    (response)=>{
      this.toastr.success(response.mensagem)
    },
    (err)=>this.toastr.error(err.error.message)
  )
  this.ngOnInit();
}

}
