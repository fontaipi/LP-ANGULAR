import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../service/hero.service";
import {Hero} from "../data/Hero";

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent implements OnInit {

  heroName: string;
  creationString: string;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.creationString = '';
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    let hero;
    hero = new Hero();
    hero.name = this.heroName;
    hero.hp = 0;
    hero.agility = 0;
    hero.attack = 0;
    hero.damage = 0;
    hero.points = 40;
    this.heroService.addHero(hero);
    this.creationString = 'Le héro a bien été créé';
  }

}
