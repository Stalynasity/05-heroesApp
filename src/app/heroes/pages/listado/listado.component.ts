import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService:HeroesService){}

  heroes:Heroe[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( heroes => {
      this.heroes = heroes
    });
  }

}
