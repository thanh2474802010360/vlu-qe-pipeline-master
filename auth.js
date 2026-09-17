// Updated authentication function for feature branch

function login(username, password) {
    if (!username || !password) {
        return false;
    }

    if (username === 'locked') {
        return false;
    }

    return username === 'admin' && password === '9999';
}

module.exports = login;
