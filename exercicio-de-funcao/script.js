function calcPct(value1, value2) {
    return (value2 / value1) * 100;   
}

const x = 30;
const y = 10;
const pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`)