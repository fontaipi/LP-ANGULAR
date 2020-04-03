import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../data/hero';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {HeroService} from '../service/hero.service';
import {Weapon} from '../data/Weapon';
import {WeaponService} from '../service/weapon.service';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css']
})
export class WeaponDetailComponent implements OnInit {

  weapon: Weapon;

  constructor(
    private route: ActivatedRoute,
    private weaponService: WeaponService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWeapon();
  }

  getWeapon(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.weaponService.getWeapon(id)
      .subscribe(weapon => this.weapon = weapon);
  }

  goBack(): void {
    this.location.back();
  }

  addStat(action: string, type: string): void {
    if (action === 'add' && this.isPoints()) {
      switch (type) {
        case 'hp' : {
          if (this.weapon.hp < 5) { this.weapon.hp++; }
          break;
        }

        case 'attack' : {
          if (this.weapon.attack < 5) { this.weapon.attack++; }
          break;
        }

        case 'damage' : {
          if (this.weapon.damage < 5) { this.weapon.damage++; }
          break;
        }

        case 'agility' : {
          if (this.weapon.agility < 5) { this.weapon.agility++; }
          break;
        }

        default :
          break;
      }
    } else if (action === 'remove') {
      switch (type) {
        case 'hp' : {
          if (this.weapon.hp > -5) { this.weapon.hp--; }
          break;
        }

        case 'attack' : {
          if (this.weapon.attack > -5) { this.weapon.attack--; }
          break;
        }

        case 'damage' : {
          if (this.weapon.damage > -5) { this.weapon.damage--; }
          break;
        }

        case 'agility' : {
          if (this.weapon.agility > -5) { this.weapon.agility--; }
          break;
        }

        default :
          break;
      }
    }
  }

  isPoints(): boolean {
    return ( this.weapon.hp + this.weapon.attack + this.weapon.damage + this.weapon.agility < 0 );
  }

  reset(): void {
    this.weapon.hp = 0;
    this.weapon.attack = 0;
    this.weapon.damage = 0;
    this.weapon.agility = 0;
  }

  save() {
    this.weaponService.updateWeapon(this.weapon);
  }

  delete() {
    this.weaponService.deleteWeapon(this.weapon.id);
  }
}
