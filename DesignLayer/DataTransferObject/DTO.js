const moment = require('../../utils/moment');
const toolsArray = require('../../utils/toolsArray');
const _ = require('lodash');

module.exports = class DTO {
    constructor() {
        this.moment = moment;
        this.toolsArray = toolsArray;
        this._ = _;
    }
}