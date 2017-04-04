//subtract

function Minus(first, second) {
    this.first = first;
    this.second = second;
    this.sum = first - second;
    this.subtract = function() {
        return this.sum;
    }
}

module.exports = Minus;