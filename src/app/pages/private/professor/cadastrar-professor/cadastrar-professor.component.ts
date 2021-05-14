import { Professor } from './../../../../models/professor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent implements OnInit {

  professor: Professor;
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tipo: new FormControl(1, Validators.required),
    senha: new FormControl('', Validators.required),
    
  })

  constructor(
    private router: Router, 
    private professorService: ProfessorService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
 
  }

    cadastrarProfessor(){
      this.professor ={
       nome: this.cadastroForm.get('nome').value,
       email: this.cadastroForm.get('email').value,
       tipo: this.cadastroForm.get('tipo').value,
       senha: this.cadastroForm.get('senha').value,
       
      };
      
      this.professorService.incluir(this.professor).subscribe(
        (response)=>{
          this.toastr.success(response.mensagem)
        },
        ()=>this.toastr.error("erro no formulario")
      )
     this.navegar()
    }
    navegar(){
      this.router.navigate(['/professor']);
    
  }

}
