console.log('running');

// Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    },
    roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      }
    
}
adventurer.roll();


// console.log(adventurer.inventory[0]);
// console.log(adventurer.companion.name);

//  create a loop that logs each item in Robin’s inventory.
for (const adventurerKey in adventurer) {
    console.log(adventurerKey, ":", adventurer[adventurerKey]);
};

// Add a “companion” sub-object to “Leo” with the following properties:
const leoFriend = {
    name: 'Frank',
    type: 'flea',
    stuff: ['small hat', 'sunglasses']
}
adventurer.companion.companion = leoFriend;

// console.log(adventurer.companion);
console.log(leoFriend);


// Part 2: Class Fantasy
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    };
    static maxHealth = 100;
    roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
      }
  } 

  // console.log(Character.constructor.roles)

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin.companion.companion.type);

// Part 3: Class Features

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    static roles = ["fighter", "healer", "wizard"];
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  //   attack (target) {
  //     console.log(`${this.name} steps forward and attacks ${target}`);
  //     super.roll();
  // }
  duel(opponent) {
      if (!(opponent instanceof Adventurer)) {
          console.log("The opponent must be an Adventurer.");
          return;
      }
      console.log(`A duel begins between ${this.name} and ${opponent.name}!`);

      while (this.health > 50 && opponent.health > 50) {
          const myRoll = this.roll(); 
          const opponentRoll = opponent.roll();

          if (myRoll > opponentRoll) {
              opponent.health--;
              console.log(`${this.name} hits ${opponent.name}! (${myRoll} vs ${opponentRoll})`);
          } else if (opponentRoll > myRoll) {
              this.health--;
              console.log(`${opponent.name} hits ${this.name}! (${opponentRoll} vs ${myRoll})`);
          } else {
              console.log("Both adventurers stand their ground.");
          }

          console.log(`${this.name}: ${this.health} health, ${opponent.name}: ${opponent.health} health`);
      }

      const winner = this.health > 50 ? this.name : opponent.name;
      console.log(`${winner} wins the duel!`);
  }
  }

  class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type;
    }
}


//Part 5: Gather your Party

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const cristyn = healers.generate("Cristyn");

const erica = new Adventurer("Erica", "fighter");
const robin = new Adventurer("Robin", "wizard");

// console.log(robin);
// console.log(cristyn);
// console.log(erica);

// erica.duel(cristyn);
erica.duel(robin);

