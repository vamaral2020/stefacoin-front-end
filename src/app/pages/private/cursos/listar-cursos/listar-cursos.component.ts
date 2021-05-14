import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from 'src/app/models/cursos';
import { Mensagem } from 'src/app/models/mensagem';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  cursos: Cursos[]

  constructor(
    private service: CursosService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.service.listar().subscribe((dados)=>{
      this.cursos = dados
    })
  }
  navegar(){
  this.router.navigate(['/cursos'])

  }
  irCadastro(){
    this.router.navigate(['/cadastrar-cursos'])
  }
  excluir(id:any){
    this.service.excluir(id).subscribe(
      ()=>{
        this.toastr.success("Excuir")
      },
      ()=>{
        this.toastr.error("Não foi possivel excluir")
      }
    )
  }
  editar(id: any){
    this.router.navigate(['cadastrar-cursos', id])
  }
}
