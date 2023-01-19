import Race from './Race';

class Halfling extends Race {
  public _maxLife: number;
  public static _count = 0;
  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLife = this.maxLifePoints;
    this._maxLife = 60;
    Halfling._count += 1;
  }
    
  get maxLifePoints():number {
    return this._maxLife;
  }

  static createdRacesInstances():number {
    const countInstances = Halfling._count;
    return countInstances;
  }
}

export default Halfling;
