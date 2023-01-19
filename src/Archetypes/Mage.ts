import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  public static _count = 0;
  readonly energyM = 'mana';
  constructor(name:string) {
    super(name);
    Mage._count += 1;
  }

  get energyType():EnergyType { 
    return this.energyM;
  }

  static createdArchetypeInstances():number {
    const countInstances = Mage._count;
    return countInstances;
  }
}