import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  public static _count = 0;
  readonly energyR = 'stamina';
  constructor(name:string) {
    super(name);
    Ranger._count += 1;
  }
  
  get energyType():EnergyType {
    const energyRanger = this.energyR;
    return energyRanger;
  }

  static createdArchetypeInstances():number {
    const countInstances = Ranger._count;
    return countInstances;
  }
}
