const moment = require('moment-timezone');

module.exports = (query="not query") => {
    if(query === "not query") {
        return moment().tz("Asia/Bangkok");
    }else {
        return moment(query).tz("Asia/Bangkok");
    }
    
}