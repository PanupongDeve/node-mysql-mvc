const toolsArray = require('./toolsArray');
let name = ['ta', 'him', 'x', 'apple', 'banana'];

it('test getLastBylimit', () => {
    
    const newName = toolsArray.getLastBylimit(name, 2);

    console.log('newArray', newName);
    expect(newName.length).toBe(2);
});



it('test shuffle', () => {
    const arr = [];
    const newArray = toolsArray.shuffle(arr);
    console.log('shuffle', newArray);
    expect(newArray.length).toBe(0);
});