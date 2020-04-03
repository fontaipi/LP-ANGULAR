import { Component, OnInit } from '@angular/core';
import {Weapon} from "../data/Weapon";
import {ActivatedRoute} from "@angular/router";
import {WeaponService} from "../service/weapon.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-weapon',
  templateUrl: './new-weapon.component.html',
  styleUrls: ['./new-weapon.component.scss']
})
export class NewWeaponComponent implements OnInit {

  weaponName: string;
  creationString: string;

  constructor(
    private route: ActivatedRoute,
    private weaponService: WeaponService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.creationString = '';
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    let weapon;
    weapon = new Weapon();
    weapon.name = this.weaponName;
    weapon.hp = 0;
    weapon.agility = 0;
    weapon.attack = 0;
    weapon.damage = 0;
    this.weaponService.addWeapon(weapon);
    this.creationString = 'L\'arme a bien été créé';
  }

}
