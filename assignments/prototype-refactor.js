/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
  
function anAttack (max){
    return Math.floor(Math.random() * Math.floor(max));
  }
  



  class GameObject {
      constructor(attributes){
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;  
      }

      destroy(){
        return `${this.name} was removed from the game`;
      }
  }


  class CharacterStats extends GameObject {
      constructor(statsattributes){
          super(statsattributes)
          this.healthPoints = statsattributes.healthPoints;
      }

      takeDamage(){
        return `${this.name} took damage`;
      }
  }


  class Humanoid extends CharacterStats {
      constructor (humanoidAttr){
        super(humanoidAttr);
        this.team = humanoidAttr.team;
        this.weapons = humanoidAttr.weapons;
        this.language = humanoidAttr.language;
        this.catchPhrase = humanoidAttr.catchPhrase;
      }

      greet(){
        return `${this.name} offers a greeting in ${this.language}`;
      }
  }
  
  

class Villan extends Humanoid{
    constructor(villanAttr){
        super(villanAttr);
        this.attitude = villanAttr.attitude;
        this.mentalStatus = villanAttr.mentalStatus;
    }

    destruction(){
        return `The evil villan ${this.name} has attacked New York`;
    }
}
  
  

class Hero extends Humanoid{
    constructor(heroAttr){
        super(heroAttr);
        this.courage = heroAttr.courage;
        this.virtue = heroAttr.virtue;
    }
    heroMontra(){
        return `${this.name} is here to save the day`;
    }

    BlazeofGlory(){
        let attack = anAttack(10)
        let powerleft = (villan.healthPoints - attack);
        villan.healthPoints = powerleft;
        return `${this.name} attacked ${villan.name} 
        with his superpower ${this.weapons[0]} attack damage ${attack} point. ${villan.name} 
        power is down to ${villan.healthPoints} points` ;
    }
}
  
  
  /*
   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
   * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
       width: 1,
       height: 1,
     },
     healthPoints: 5,
     name: 'Bruce',
     team: 'Mage Guild',
     weapons: [
       'Staff of Shamalama',
     ],
     language: 'Common Tongue'
   });
  
   const swordsman = new Humanoid({
     createdAt: new Date(),
     dimensions: {
       length: 2,
       width: 2,
       height: 2,
     },
     healthPoints: 15,
     name: 'Sir Mustachio',
     team: 'The Round Table',
     weapons: [
       'Giant Sword',
       'Shield',
     ],
     language: 'Common Tongue',
   });
  
   const archer = new Humanoid({
     createdAt: new Date(),
     dimensions: {
       length: 1,
       width: 2,
       height: 4,
     },
     healthPoints: 10,
     name: 'Lilith',
     team: 'Forest Kingdom',
     weapons: [
       'Bow',
       'Dagger',
     ],
     language: 'Elvish',
   });
  
   const villan = new Villan({
     createdAt: new Date(),
     dimensions:{
       length:3,
       width:2,
       height:6,
     },
     healthPoints:30,
     name:'Bad Bad',
     team: 'Dark Darkside',
     weapons: [
       'Orb of Dark',
       'Staff of Whoram'
     ],
     language: 'Broken English',
     mentalStatus: 'Insane',
     catchPhrase: [
       'You will never defeat me',
       'Take that you do gooder',
       'The world is mine'
      ]
  
   });
  
   const hero = new Hero({
    createdAt: new Date(),
    dimensions:{
      length:2,
      width:2,
      height:8,
    },
    healthPoints:30,
    name:'Eat Your Wheeties',
    team: 'Lame',
    weapons: [
      'Reading Books',
      'Endless Bank Account'
    ],
    language: 'Flashy Words',
    courage: 100,
    catchPhrase: [
      'You will escape the righteous cluth of justice',
      'Take that Evil Dooer',
      'You must change your evil ways'
     ]
  });
  
   console.log(mage.createdAt); // Today's date
   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
   console.log(swordsman.healthPoints); // 15
   console.log(mage.name); // Bruce
   console.log(swordsman.team); // The Round Table
   console.log(mage.weapons); // Staff of Shamalama
   console.log(archer.language); // Elvish
   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  
   console.log(mage.takeDamage()); // Bruce took damage.
   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
   console.log(villan.destruction()); //Destroying a city
   console.log(hero.heroMontra()); // Has arrived
   //console.log(hero.BlazeofGlory()); // Has arrived
  
   
  
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  
    function epicBattle(){
      let defeat = 0;
  
      while(villan.healthPoints > 0){
        console.log(hero.BlazeofGlory());
        if(villan.healthPoints <= 0){
          console.log(villan.destroy());
        }
      }
      
      
    }
  
    epicBattle();
