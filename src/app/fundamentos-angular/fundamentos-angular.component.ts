import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos-angular',
  templateUrl: './fundamentos-angular.component.html',
  styleUrls: ['./fundamentos-angular.component.css']
})
export class FundamentosAngularComponent {
   texto : string = "Este texto se muestra en la pagina y en la consola"
   marcado : boolean = true;

  constructor() { }

  ngOnInit(): void{
  }
  metodoInterpolacion(){
    console.log(this.texto)

  }

  metodoOneWayBinding() {
    this.marcado=!this.marcado
  }

}
