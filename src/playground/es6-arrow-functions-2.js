const multiplier = {
    numbers: [12, 10, 20, 25],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply()); 