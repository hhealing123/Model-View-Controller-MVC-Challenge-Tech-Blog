const { format_date } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-11-14 18:49:50');
  
    expect(format_date(date)).toBe('11/14/2022');
});