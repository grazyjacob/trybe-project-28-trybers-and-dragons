import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  public static _count = 0;
  readonly energyN = 'mana';
  constructor(name:string) {
    super(name);
    Necromancer._count += 1;
  }
  
  get energyType():EnergyType { 
    return this.energyN;
  }
  
  static createdArchetypeInstances():number {
    const countInstances = Necromancer._count;
    return countInstances;
  }
}