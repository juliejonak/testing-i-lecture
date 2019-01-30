const math = require('./math.js');

describe('the add function', () => {
    
    test('adds two numbers', () => {
        expect(math.add(3,5)).toEqual(8);
        expect(math.add(2,-3)).toEqual(-1);
        expect(math.add(1.2, 3.1)).toEqual(4.3);
    })
    
    // test('converts numerical strings to integers', () => {
    //     expect(math.add('3', '2')).toEqual(5);
    // })
    
    // test('returns NaN for non numerical inputs', () => {
    //     expect(math.add('a', 'b')).toBeNaN();
    //     expect(math.add('x', 3)).toBeNaN();
    //     expect(math.add([1,2,3], {1:1, 2:2, 3:3})).toBeNaN();
    // })  
    
    test('throws error on non number inputs', () => {
        expect(() => {
            math.add('2', '3');
        }).toThrow();
        expect(() => {
            math.add([], 3)
        }).toThrow();
    })
})


describe('the subtract function', () => {
    
    test('subtracts y from x', () => {
        expect(math.subtract(5, 2)).toEqual(3);
    })
    
    test('converts numerical strings to integers', () => {
        expect(math.subtract('2', '6')).toEqual(-4);
        expect(math.subtract('7', 2.5)).toEqual(4.5);
    })
    
    test('returns NaN for non numerical inputs', () => {
        expect(math.subtract('a', 'b')).toBeNaN();
        expect(math.subtract('x', 3)).toBeNaN();
        expect(math.subtract([1,2,3], {1:1, 2:2, 3:3})).toBeNaN();
    })
})