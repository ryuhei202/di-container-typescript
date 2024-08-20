import 'reflect-metadata'

function Log(target: any, key: string) {
  const type = Reflect.getMetadata('design:type', target, key)
  console.log(type.name) // Function

  const paramtypes = Reflect.getMetadata('design:paramtypes', target, key)
  console.log(paramtypes[0].name) // String

  const returntype = Reflect.getMetadata('design:returntype', target, key)
  console.log(returntype.name) // Boolean
}

class Demo {
  @Log
  public foo(bar: string): boolean {
    return typeof bar === 'string'
  }
}
new Demo()