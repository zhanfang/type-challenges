declare function PromiseAll<T extends readonly unknown[]>(args: readonly [...T])
    : Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise<string>((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// // expected to be `Promise<[number, number, string]>`
// const p = Promise.all([promise1, promise2, promise3] as const)

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
