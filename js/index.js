import Arena from './arena.js'
import Gladiator from './gladiator.js'



const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Club");
const andronicus = new Gladiator("Andronicus","Sword");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
console.log(colosseum.addGladiator(andronicus))
console.log(colosseum.fight())
colosseum.addGladiator(andronicus)
console.log(colosseum.fight()) 