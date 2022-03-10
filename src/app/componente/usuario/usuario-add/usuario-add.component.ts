import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.userService.getStudent(id).subscribe(data => {
        this.usuario = data;

        console.info("Usuario de nome : " + this.usuario.nome);
      });
    }
  }


  salvarUser() { //atualizando usuario
        if(this.usuario.id != null && this.usuario.id?.toString().trim() != null){
          this.userService.atualizarUsuario(this.usuario).subscribe(data => {
            this.novo();
            console.info("Atualizou usuario" + data);
          })
        }else {//salvando novo usuario
          this.userService.salvarUsuario(this.usuario).subscribe(data => {
            this.novo();
            console.info("Salvou usuario" + data);
          });

        }
  }

  novo(){
    this.usuario = new User();
  }


}
