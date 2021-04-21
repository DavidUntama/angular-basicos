import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  hb:string='';
  constructor() { }

  borrarHeroe(): string{
    //this.heroes.pop()
    this.hb = this.heroes.shift()||"";
    return this.hb;
  }

  

}
