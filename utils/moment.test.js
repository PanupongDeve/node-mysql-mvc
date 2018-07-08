const moment = require('./moment');

it('See moment', () => {
    console.log('see time', moment('2014-12-01T12:00:00Z').format());
});