// デコレーターを作成
function Logger(constructor: Function) {
  // 1
  console.log('Logging...')
  // 2
  console.log(constructor)
}

@Logger
class Person {
  name: string = 'ryu'

  constructor() {
    // 3
    console.log('Person object is creating...')
  }
}

const person = new Person()
// 4
console.log(person.name)