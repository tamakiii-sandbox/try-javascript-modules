import Person from './Person'
// import img from 'file-loader!../asset/31a-dohm+bL._AA168_.jpg'

class Friend extends Person {
  getName() {
    return this.name
  }
  getUrl() {
    return require('file-loader!../asset/31a-dohm+bL._AA168_.jpg')
  }
}

var friend = new Friend('John')
const image = document.createElement('img')
image.src = '../dist/' + friend.getUrl()

document.body.appendChild(image)
