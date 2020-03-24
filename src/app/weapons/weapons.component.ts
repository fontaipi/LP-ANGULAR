import {Component, OnInit, ViewChild} from '@angular/core';
import {WeaponService} from '../service/weapon.service';
import {Weapon} from '../data/Weapon';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Hero} from '../data/Hero';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  weapons: Weapon[];

  displayedColumns: string[] = ['name', 'hp', 'attack', 'damage', 'agility'];
  dataSource: MatTableDataSource<Weapon>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private weaponService: WeaponService) {
  }

  ngOnInit() {
    this.getWeapons();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getWeapons() {
    this.weaponService.getWeapons()
      .subscribe(weapons => {
        this.weapons = weapons;
        this.dataSource = new MatTableDataSource(this.weapons);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }


}
