function login(username, password) {
    if (!username || !password) {
        return false;
    }

    if (username === 'locked') {
        return false;
    }

    return username === 'admin' && password === '123';
}

module.exports = login;
