import {Serializable} from './Serializable';

export class Weapon extends Serializable  {
  id: string;
  name: string;
  hp: number;
  attack: number;
  agility: number;
  damage: number;

  uneMethode(): string {
    return 'le nom de mon weapon' + this.name;
  }
}
