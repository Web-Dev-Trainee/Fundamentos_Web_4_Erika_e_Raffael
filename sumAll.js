const sumAll = function (x, y) {
    if (x > 0 && y > 0 && typeof x === 'number' && typeof y === 'number') {
        var valorx = x;
        var valory = y;
        var total = 0;
        if (x < y) {
            for (var i = valorx; i <= valory; i++) {
                total += i;
            }
            return total;
        } else if (x > y) {
            for (var i = valory; i <= valorx; i++) {
                total += i;
            }
            return total;
        }
    } else {
        return 'ERROR'
    }
}

module.exports = sumAll