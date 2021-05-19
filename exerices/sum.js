let counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increasment: function () {
            changeBy(1);
        },
        decreasment: function () {
            changeBy(-1)
        },
        value: function () {
            return privateCounter;
        }
    };
})();
console.log(counter.value());
counter.increasment();
counter.increasment();
console.log(counter.value());
counter.decreasment();
console.log(counter.value());