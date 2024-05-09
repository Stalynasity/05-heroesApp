import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module.ts.module';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroesTarjetasComponent } from './components/heroes-tarjetas/heroes-tarjetas.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroesTarjetasComponent,
    ImagenPipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
