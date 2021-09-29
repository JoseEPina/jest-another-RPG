const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

function Player(name = '') {
   this.name = name;

   this.health = Math.floor(Math.random() * 10 + 95);
   this.strength = Math.floor(Math.random() * 5 + 7);
   this.agility = Math.floor(Math.random() * 5 + 7);

   this.inventory = [new Potion('health'), new Potion()];

   // returns an object with various player properties
   Player.prototype.getStats = function () {
      return {
         potions: this.inventory.length,
         health: this.health,
         strength: this.strength,
         agility: this.agility,
      };
   };
   
   // returns information about the player's health
   Player.prototype.getHealth = function () {
      return `${this.name}'s health is now ${this.health}!`;
   };
   
   // returns true or false to check if player's health has reached zero.
   Player.prototype.isAlive = function () {
      if (this.health === 0) {
         return false;
      }
      return true;
   };
   
   
   Player.prototype.reduceHealth = function (health) {
      this.health -= health;

      if (this.health < 0) {
         this.health = 0;
      }
   };

   // returns the inventory array or false if empty
   Player.prototype.getInventory = function () {
      if (this.inventory.length) {
         return this.inventory;
      }
      return false;
   };
}

module.exports = Player;

// An example of mocking fs might look like this:

// const fs = require('fs');
// jest.mock('fs');
// fs.readFileSync.mockReturnValue('fake content');

// In this case, the fs method readFileSync() has been mocked to always return the string 'fake content', thereby eliminating the need to read from an actual file during the test.
