import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  hayError: boolean = false;
  
  
  termino:string = '';
  heroes:Heroe[] = [];
  heroeSeleccionado:Heroe | undefined;

  constructor(private heroesServicio:HeroesService){}


  ngOnInit(): void {
  }

  buscando(){
    this.heroesServicio.getSugerencia(this.termino.trim())
    .subscribe(heroes=> this.heroes = heroes);
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent ){
    
    if (!event.option.value) {
      this.heroeSeleccionado = undefined
      return;
    }
    
    const heroe: Heroe= event.option.value;
    this.termino= heroe.superhero;
    this.hayError= false;

    this.heroesServicio.getHeroePorId(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe);
  }   
  

}
