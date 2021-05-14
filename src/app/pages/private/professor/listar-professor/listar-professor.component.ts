import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/services/professor.service';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css']
})
export class ListarProfessorComponent implements OnInit {
  professores: Array<Professor> = []

  constructor(
     private router: Router, 
     private toastr: ToastrService,
     private services: ProfessorService,
   
     
     ) { }

  ngOnInit(): void {
 
    this.services.listar().subscribe((professor)=>{
      this.professores = professor
    })
  }
 
  irCadastro(){
    this.router.navigate(['/cadastrar-professor'])

  }
  excluir(id: number){
    if(confirm("Voce deseja realmente excluir esse professor")){
      this.services.excluir(id).subscribe(()=>{
      this.toastr.success('Professor excluido com sucesso');
      this.ngOnInit();
      },
      err=>this.toastr.error(err.error.message))

    }

  }
  editar(id: any){
   this.services.alterar(id).subscribe(()=>{
     this.toastr.success("Alerado com sucesso")
   },
   ()=>this.toastr.error("Não foi possivel Alterar"))
    
  }
 

}
