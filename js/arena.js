import Gladiator from './gladiator.js'
export default class Arena {

  constructor(name) {

    this.gladiators = []
    this.name = name.charAt(0).toUpperCase() + name.substring(1)
  }

  addGladiator(gladiator) {
    if (this.gladiators.length < 2) {
      this.gladiators.push(new Gladiator(gladiator.name, gladiator.weapon))
    }else{
      return 'the arena already have 2 Gladiators'
    }
  }

  fight(){
    if (this.gladiators[0].weapon === 'unarmed' ||this.gladiators[1].weapon ==='unarmed') {
      return  'the fight is on hold till both fighter has weapon';
  } else{
    if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
      this.gladiators =[]
      return  'both gladiators are dead';

  } else {
      console.log(this.gladiators[0].weapon)
      console.log(this.gladiators[1].weapon)
      switch (this.gladiators[0].weapon) {
          case 'Trident':
              if (this.gladiators[1].weapon === 'Spear') { this.gladiators.pop()} else {this.gladiators.shift()}
              return `${this.gladiators[0].name} is the winner`;
          case 'Spear':
              if (this.gladiators[1].weapon === 'Club') {  this.gladiators.pop()} else {    this.gladiators.shift()}
              return `${this.gladiators[0].name} is the winner`;
          case 'Club':
              if (this.gladiators[1].weapon === 'Trident') {   this.gladiators.pop()} else {   this.gladiators.shift()}
              return `${this.gladiators[0].name} is the winner`;              
      }
  }
  }}

}

