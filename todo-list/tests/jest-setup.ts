// 这是在执行npm test的时候就会执行的文件，用于初始化一些变量
// 全局引入
import "jest-location-mock";

// tests/jest-setup.ts  
// 在全局变量global上实现localStorage API
// console.log('执行这里....');
// Object.defineProperty(global, 'localStorage', {
//     value: {
//       store: {} as Record<string, string>,
//       setItem(key: string, value: string) {
//         this.store[key] = value;
//       },
//       getItem(key: string) {
//         return this.store[key];
//       },
//       removeItem(key: string) {
//         delete this.store[key];
//       },
//       clear() {
//         this.store = {}
//       }
//     },
//     configurable: true,
// })