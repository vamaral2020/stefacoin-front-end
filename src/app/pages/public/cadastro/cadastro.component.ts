import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  aluno: Aluno;

  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tipo: new FormControl(2, Validators.required),
    idade: new FormControl(null, Validators.required),
    formacao: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    
  })

  constructor(
    private router: Router, 
    private toastr: ToastrService,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
  }

  cadastrarAluno(){
    this.aluno ={
     nome: this.cadastroForm.get('nome').value,
     email: this.cadastroForm.get('email').value,
     tipo: this.cadastroForm.get('tipo').value,
     idade: this.cadastroForm.get('idade').value,
     formacao: this.cadastroForm.get('formacao').value,
     senha: this.cadastroForm.get('senha').value,
     
    };
    
    this.alunoService.incluir(this.aluno).subscribe(
      (response)=>{
        this.toastr.success(response.mensagem)
      },
      ()=>this.toastr.error("erro no formulario")
    )
   this.navegar()
  }
  navegar(){
    this.router.navigate(['/nova-conta']);
  
}

}
