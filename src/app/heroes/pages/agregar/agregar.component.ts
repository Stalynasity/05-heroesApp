import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  publusher=[
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    }
  ];

  constructor(private heroeService: HeroesService,
              private activetedRoute: ActivatedRoute,
              private router:Router){}
  
  ngOnInit(): void {

    if (!this.router.url.includes('editar') ) {
      return;
    }

    this.activetedRoute.params
    .pipe(
      switchMap(({id})=> this.heroeService.getHeroePorId(id) )
    )
    .subscribe( heroe=> this.heroe= heroe );
  }

  heroe:Heroe={
    superhero:'',
    alter_ego: '',
    characters: '',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:'',
  }

  guardar(){

    if(this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      //actualizar
      this.heroeService.editarHeroe(this.heroe)
      .subscribe(heroe => console.log('actualizndo',heroe))
    
    } else{
      //crear
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(heroe =>{
        this.router.navigate([`/heroes/editar`,heroe.id]);
      });

    }
  }

  borrarHeroe() {
    this.heroeService.BorrarHeroe(this.heroe.id!)
    .subscribe(resp=>{
      this.router.navigate(['/heroes']);
    })
  }

}
