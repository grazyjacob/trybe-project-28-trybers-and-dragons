import Race from './Race';

class Dwarf extends Race {
  public _maxLife: number;
  public static _count = 0;
  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLife = this.maxLifePoints;
    this._maxLife = 80;
    Dwarf._count += 1;
  }
  
  get maxLifePoints():number {
    return this._maxLife;
  }

  static createdRacesInstances():number {
    const countInstances = Dwarf._count;
    return countInstances;
  }
}

export default Dwarf;