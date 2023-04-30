const squareMeters = 123;
const rooms = 3;
const preco = calculatePrice(squareMeters, rooms)
console.log(`A casa custa ${preco}`)

function calculatePrice(squareMeters, rooms) {
    const m2 = 100
    if (rooms <= 1) {
        return m2 * squareMeters
    }
    if (rooms === 2) {
        return (m2 * 1.2) * squareMeters
    }
    if (rooms >= 3) {
        return (m2 * 1.5)
    }
}