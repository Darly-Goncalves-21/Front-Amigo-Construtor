import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-root',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: User[] = [];

  nome!: string;

  p: number = 1;

  total!: number;

  constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
      this.usuarioService.getStudentList().subscribe(data =>{
      this.students = data;
      console.log(data);
    });
  }

  deletarUser(id : any){

    if (confirm('Deseja deletar esse registro ?')){

    this.usuarioService.deletar(id).subscribe(data => {
      this.usuarioService.getStudentList().subscribe(data =>{
        this.students = data;
        console.log(data);
      });
    });
  }
  }

  buscaPorNome(){
    this.usuarioService.consultaNome(this.nome).subscribe(data => {
      this.students = data;
    });
  }

  carregarPagina(pagina: any){
    console.info("Pagina " + pagina)
  }

}
