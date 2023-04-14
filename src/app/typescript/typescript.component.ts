import { Component } from '@angular/core';

enum Enumeracion {
  Valor_1,
  Valor_2,
  Valor_3,
  Valor_4
}

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})

export class TypescriptComponent {
  ngOnInit() {
    this.primitivos()
  }

  primitivos(){
    let booleano: boolean = true
    let numero: number = 14
    let texto: string = "Esto es una cadena de texto"
    let valores : Enumeracion = Enumeracion.Valor_1
    let NoValido: unknown = 35
    let indefinido : undefined=undefined

    console.log("La variable numero es de tipo "+ (typeof numero)+ " y tiene el valor "+numero)
    console.log("La variable booleano es de tipo "+ (typeof booleano)+ " y tiene el valor "+booleano)
    console.log("La variable texto es de tipo "+ (typeof texto)+ " y tiene el valor "+texto)
    console.log("La variable valores es de tipo Enum(Enumeracion) y tiene el valor "+valores)
    console.log("La variable NoValido es de tipo unknown y tiene el valor "+NoValido)
    console.log("La variable indefinido es de tipo "+ (typeof indefinido)+ " y tiene el valor "+indefinido)

  }
  
}

