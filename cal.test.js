const {sum, minus} = require('./cal')

describe("jake-test", () => {
    test('adds 1+2 to be equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    test('minus 1-2 to be equal -1', () => {
        expect(minus(1, 2)).toBe(-1);
    })
})


