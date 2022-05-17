import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinasModel } from '../vacinas.model';
import { VacinasService } from '../vacinas.service';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.css']
})
export class VacinasComponent implements OnInit {
  @Input()
   empresaFilho : string = '';
    vacinas: VacinasModel[] = [];
  constructor(private activatedRoute : ActivatedRoute,
      private vacinasservice : VacinasService,
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
    this.vacinasservice.delete(id)
      .subscribe(
        ()=>{
          console.log(`deletou registro com id ${id}`);
          this.getAll();
        }
      );
  }

  private getAll(){

    this.vacinasservice.getAll()
    .subscribe(
      (data : any) => {
        console.log(data);
        this.vacinas = data;
      }
    );

  }

}
