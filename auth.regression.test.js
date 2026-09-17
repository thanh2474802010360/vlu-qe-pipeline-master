const login = require('./auth');

test('Regression Test - login fails with incorrect password', () => {
    expect(login('admin', 'wrong')).toBe(false);
});

test('Regression Test - login fails with empty username', () => {
    expect(login('', '123')).toBe(false);
});

test('Regression Test - login fails with empty password', () => {
    expect(login('admin', '')).toBe(false);
});

test('Regression Test - locked account cannot login', () => {
    expect(login('locked', '123')).toBe(false);
});
