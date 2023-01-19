import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  public static _count = 0;
  readonly energyW = 'stamina';
  constructor(name:string) {
    super(name);
    Warrior._count += 1;
  }
  
  get energyType():EnergyType { 
    return this.energyW;
  }
  
  static createdArchetypeInstances():number {
    const countInstances = Warrior._count;
    return countInstances;
  }
}
