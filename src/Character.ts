import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race from './Races/Race';
import Fighter from './Fighter';
import getRandomInt from './utils';
import { Elf } from './Races';

export default class Character implements Fighter {
  private _maxLifePoints: number;
  private _dexterity: number;
  private _archetype: Archetype;

  private _race: Race;
  private _energy: Energy;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
    
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._energy = { 
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10) };
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
  }

  get race(): Race {
    return this._race;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }
 
  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  checkMaxLifePoints(): void {
    const maxLifePoints = this._maxLifePoints;
    if (maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
  }

  levelUp():void {
    this._strength += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  attack(enemy:Fighter):void {
    const myDamage = this._strength - enemy.defense;
    let enemyLife = enemy.lifePoints;
    enemyLife -= myDamage;
    if (myDamage <= 0) {
      enemyLife -= 1;
    }
    if (enemyLife <= 0) enemyLife = -1;
  }

  special(enemy:Fighter):void {
    const myDamage = this._strength;
    const enemyCharacter = enemy;
    enemyCharacter.lifePoints -= 2 * (myDamage);
  }

  receiveDamage(attackPoints:number):number {
    const damage = attackPoints - this._defense;
    this._lifePoints -= damage;
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}