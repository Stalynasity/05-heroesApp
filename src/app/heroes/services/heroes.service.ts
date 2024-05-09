import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }

  getHeroePorId(id: string): Observable<Heroe> {
    const url = `${this.url}/heroes/${id}`;
    return this.http.get<Heroe>(url)
  }

  getSugerencia(termino: string): Observable<Heroe[]> {
    const url = `${this.url}/heroes?q=${termino}&_limit=5`;
    return this.http.get<Heroe[]>(url)
  }


  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.url}/heroes`, heroe)
  }

  editarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.url}/heroes/${heroe.id}`, heroe)
  }

  BorrarHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/heroes/${id}`)
  }


}
