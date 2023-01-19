import Race from './Race';

class Orc extends Race {
  public _maxLife: number;
  public static _count = 0;
  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLife = this.maxLifePoints;
    this._maxLife = 74;
    Orc._count += 1;
  }
    
  get maxLifePoints():number {
    return this._maxLife;
  }

  static createdRacesInstances():number {
    const countInstances = Orc._count;
    return countInstances;
  }
}

export default Orc;