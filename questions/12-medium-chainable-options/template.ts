type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V)
    : Chainable<T & {[P in K]: V}>
  get(): T
}


declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}