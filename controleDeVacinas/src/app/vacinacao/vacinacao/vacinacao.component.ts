import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinacaoModel } from '../vacinacao.model';
import { VacinacaoService } from '../vacinacao.service';

@Component({
  selector: 'app-vacinacao',
  templateUrl: './vacinacao.component.html',
  styleUrls: ['./vacinacao.component.css']
})
export class VacinacaoComponent implements OnInit {
  @Input()
   empresaFilho : string = '';
    vacinacao: VacinacaoModel[] = [];
  constructor(private activatedRoute : ActivatedRoute,
      private vacinacaoservice : VacinacaoService,
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
    this.vacinacaoservice.delete(id)
      .subscribe(
        ()=>{
          console.log(`deletou registro com id ${id}`);
          this.getAll();
        }
      );
  }

  private getAll(){

    this.vacinacaoservice.getAll()
    .subscribe(
      (data : any) => {
        console.log(data);
        this.vacinacao = data;
      }
    );

  }

}
