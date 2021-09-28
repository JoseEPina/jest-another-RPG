const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

function Player(name = '') {
   this.name = name;

   this.health = Math.floor(Math.random() * 10 + 95);
   this.strength = Math.floor(Math.random() * 5 + 7);
   this.agility = Math.floor(Math.random() * 5 + 7);

   this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;


// An example of mocking fs might look like this:

// const fs = require('fs');
// jest.mock('fs');
// fs.readFileSync.mockReturnValue('fake content');

// In this case, the fs method readFileSync() has been mocked to always return the string 'fake content', thereby eliminating the need to read from an actual file during the test.