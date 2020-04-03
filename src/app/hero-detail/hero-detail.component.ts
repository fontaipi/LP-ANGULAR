import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../data/hero';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {HeroService} from '../service/hero.service';
import {WeaponService} from '../service/weapon.service';
import {Weapon} from '../data/Weapon';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  weapon: Weapon;
  weapons: Weapon[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private weaponService: WeaponService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getWeapons();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.getWeapon();
      });
  }

  getWeapons(): void {
    this.weaponService.getWeapons().subscribe(weapons => this.weapons = weapons);
  }

  getWeapon(): void {
    this.weaponService.getWeapon(this.hero.weaponId).subscribe(weapon => this.weapon = weapon);
  }

  onWeaponUpdate(): void {
    this.getWeapon();
  }

  addStat(action: string, type: string): void {
    if (action === 'add' && this.isPoints()) {
      switch (type) {
        case 'hp' : {
          this.hero.hp++;
          break;
        }

        case 'attack' : {
          this.hero.attack++;
          break;
        }

        case 'damage' : {
          this.hero.damage++;
          break;
        }

        case 'agility' : {
          this.hero.agility++;
          break;
        }

        default :
          break;
      }
    } else if (action === 'remove') {
      switch (type) {
        case 'hp' : {
          if (this.hero.hp > 1) { this.hero.hp--; }
          break;
        }

        case 'attack' : {
          if (this.hero.attack > 1) { this.hero.attack--; }
          break;
        }

        case 'damage' : {
          if (this.hero.damage > 1) { this.hero.damage--; }
          break;
        }

        case 'agility' : {
          if (this.hero.agility > 1) { this.hero.agility--; }
          break;
        }

        default :
          break;
      }
    }
  }

  isPoints(): boolean {
    return (this.hero.hp + this.hero.attack + this.hero.damage + this.hero.agility < this.hero.points);
  }

  reset(): void {
    this.hero.hp = 1;
    this.hero.attack = 1;
    this.hero.damage = 1;
    this.hero.agility = 1;
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.heroService.updateHero(this.hero);
  }
  delete() {
    this.heroService.deleteHero(this.hero.id);
  }


}
