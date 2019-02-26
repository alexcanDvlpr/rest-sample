import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon = {};

  constructor(private service: PokemonServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      res => (this.pokemon = res),
      err => console.log(err)
    );
  }

  mostrar() {
    alert('El Pokemón es ' + this.pokemon.name);
  }

}
