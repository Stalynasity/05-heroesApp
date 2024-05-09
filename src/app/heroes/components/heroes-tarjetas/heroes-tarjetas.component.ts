import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-heroes-tarjetas',
  templateUrl: './heroes-tarjetas.component.html',
  styleUrls: ['./heroes-tarjetas.component.css']
})
export class HeroesTarjetasComponent {

  @Input() heroe!:Heroe;

}
