import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosModel } from '../usuarios.model';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @Input()
   empresaFilho : string = '';
  usuarios: UsuariosModel[] = [];
  constructor(private activatedRoute : ActivatedRoute,
      private usuariosservice : UsuarioService,
      private router:Router
    ) {

  };

  ngOnInit(): void {
    this.getAll();
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onDelete(id: number){
    this.usuariosservice.delete(id)
      .subscribe(
        ()=>{
          console.log(`deletou registro com id ${id}`);
          this.getAll();
        }
      );
  }

  private getAll(){

    this.usuariosservice.getAll()
    .subscribe(
      (data : any) => {
        console.log(data);
        this.usuarios = data;
      }
    );

  }

}
