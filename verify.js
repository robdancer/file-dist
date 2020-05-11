const secretPassword = "bigbob123";

function verifyCredentials(password) {
    return password === secretPassword;
}

exports.verifyCredentials = verifyCredentials;