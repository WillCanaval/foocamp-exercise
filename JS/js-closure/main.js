function toggle(posibilidades) {
    let counter = 0;
    return function selection() {
        const item = posibilidades[counter];
        if (counter === posibilidades.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        return item;
    }
}


const hello = toggle(['hello']);
const onOff = toggle(['on', 'off']);
let speed = toggle(['slow', 'medium', 'fast']);

console.log(hello()); // "hello"
console.log(hello()); // "hello"

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"

console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
