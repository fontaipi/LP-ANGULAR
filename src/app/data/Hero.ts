import {Serializable} from './Serializable';

export class Hero extends Serializable  {
  id: string;
  name: string;
  attack: number;
  damage: number;
  agility: number;
  hp: number;
  points: number;
  weaponId: string;

  uneMethode(): string {
    return 'le nom de mon hero' + this.name;
  }
}
