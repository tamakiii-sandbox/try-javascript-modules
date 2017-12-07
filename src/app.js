import Person from './Person'

class Friend extends Person {
  getName() {
    return this.name
  }
}

var friend = new Friend('John')
alert(friend.getName())
