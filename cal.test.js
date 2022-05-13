const {sum,minus} = require('./cal')

test('adds 1+2 to be equal 3', ()=>{
    expect(sum(1,2)).toBe(4);
})
test('minus 1-2 to be equal -1', ()=>{
    expect(minus(1,2)).toBe(-1);
})
