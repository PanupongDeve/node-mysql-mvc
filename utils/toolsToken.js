const jwt = require('jsonwebtoken');

const keyToken = 'keytoken';
const secretKeyServer = 'keytoken-auth';

const generateToken = (data) => {
    try {
        const  token = jwt.sign(JSON.stringify(data), keyToken);
        return token;
    } catch (error) {
        res.status(400).send({error});
    }
}

const verifyToken = (token, res) => {
    try {
        const decoded = jwt.verify(token, keyToken);
        const secretKeyUser = getSecretByDecodedToken(decoded);
        return checkUserKey(secretKeyUser, secretKeyServer);
      } catch(err) {
        // err
        const messageError = {
            err,
            msgErr: 'Token fail'
        }
        
        res.status(400).send({messageError});
      }
}

const SocketVerifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, keyToken);
        const secretKeyUser = getSecretByDecodedToken(decoded);
        return checkUserKey(secretKeyUser, secretKeyServer);
      } catch(err) {
        // err
        const messageError = {
            err,
            msgErr: 'Token fail'
        }
        
        return false;
      }
}

const getSecretByDecodedToken = (decoded) => {
    return decoded.secret;
}

const checkUserKey = (secretKeyUser, secretKeyServer) => {
    return secretKeyUser === secretKeyServer;
}




module.exports = {
    generateToken,
    verifyToken,
    secretKeyServer,
    SocketVerifyToken
}