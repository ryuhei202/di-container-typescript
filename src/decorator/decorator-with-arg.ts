function LoggerWithArg(message: string) {
  return function (_constructor: Function) {
    console.log(message)
  }
}

@LoggerWithArg('test')
class Hello {
  constructor() {
    console.log('Hello')
  }
}

new Hello()