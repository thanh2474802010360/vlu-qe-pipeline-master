const login = require('./auth');

test('Smoke Test - login succeeds with correct credentials', () => {
    expect(login('admin', '123')).toBe(true);
});
