// class Counter {
//     count: number = 0;
//     increment () {
//         return (this.count = this.count+1);
//     }
//     decrement () {
//         return (this.count = this.count-1);
//     }
// }


class Counter {
    static count: number = 0; // static meaning we cannot use this
    increment () {
        return (Counter.count = Counter.count+1);
    }
    decrement () {
        return (Counter.count = Counter.count-1);
    }
}


const c1 = new Counter();
const c2 = new Counter();


console.log(c1.increment());
console.log(c1.increment());
console.log(c1.increment());// different memory


console.log(c2.increment());// different memory

