import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {


  heroe!:Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id)),
      tap(console.log)
    )
    .subscribe( heroe => {this.heroe = heroe})
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

  
}
