import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>David</h1>
    <h2> {{ titulo }} </h2>

    <h3>la base es <strong>{{base}}</strong> </h3>
    <button (click)="acumular(base)" > aumentar base</button>
    <button (click)="acumular(-base)" > disminuir base</button>
    <p>
    <button (click)="acumular(1)">+1</button>
    <span> {{numero}} </span>
    <button (click)="acumular(-1);" >-1</button>
    `
})
export class ContadorComponent{
    public titulo : string = 'contador app';
    numero: number = 10;
    base: number = 5;

    sumar(){
        this.numero++;
    }
    restar(){
        this.numero--;
    }
    acumular(valor: number){
        this.numero += valor;
    }
}