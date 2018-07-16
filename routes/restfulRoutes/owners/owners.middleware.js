
const toolsToken = require('../../../utils/toolsToken');

const checkToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (toolsToken.verifyToken(token, res)) {
        next();
    }
   
}



module.exports = {
    checkToken
}
