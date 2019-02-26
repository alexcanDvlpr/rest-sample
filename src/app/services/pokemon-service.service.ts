import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  endpoint = 'https://pokeapi.co/api/v2/pokemon/pikachu';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.endpoint);
  }

}
