export default class Gladiator {

    constructor(name, weapon) {
      this.name = name;
      if (weapon.toLowerCase() === "Spear".toLowerCase() || weapon.toLowerCase() === 'Club'.toLowerCase() || weapon.toLowerCase() === 'Trident'.toLowerCase()) {
        this.weapon = weapon.charAt(0).toUpperCase() + weapon.substring(1);
      } else {
        this.weapon = 'unarmed'
        return console.log('choose your weapon carefully or you goonna die ')
      }
  
    }
  }