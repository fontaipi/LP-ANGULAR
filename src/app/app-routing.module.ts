import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {WeaponsComponent} from './weapons/weapons.component';
import {WeaponDetailComponent} from './weapon-detail/weapon-detail.component';
import {HomeComponent} from './home/home.component';
import {NewWeaponComponent} from './new-weapon/new-weapon.component';
import {NewHeroComponent} from './new-hero/new-hero.component';


const routes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes/detail/:id', component: HeroDetailComponent},
  {path: 'heroes/new', component: NewHeroComponent},
  {path: 'weapons', component: WeaponsComponent},
  {path: 'weapons/detail/:id', component: WeaponDetailComponent},
  {path: 'weapons/new', component: NewWeaponComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
