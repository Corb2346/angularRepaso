import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> Hola Mundo en angular</h1>
<h2> {{title}}</h2>

<button (click)= "acumular(1)"> +1 </button>
<button (click)= "acumular(-1)"> -1 </button>
<br>
<br>
<span> {{numero}} </span>

<h3> La base es: <strong> 5 </strong></h3>

<button (click)= "acumularDos(base)">{{base}} </button>
<button (click)= "acumularDos(-base)"> {{-base}} </button>
<br>
<br>
<span> {{numeroDos}} </span>

    `
})

  

export class ContadorComponent{
    title: string = 'Contador App';
    numero: number = 10;
    numeroDos: number = 10;
    base:number= 5;
  
    sumar(){
    this.numero += 1;
  }
  
  restar(){
    this.numero -= 1;
  }

  acumular(valor:number){
    this.numero += valor;
  }
  
  acumularDos(valor:number){
    this.numeroDos += valor;
  }
} 