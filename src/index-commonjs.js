/**
 * Created manually to de-duplicate common dependencies
 * among different uuid implementations below.
 */
const v1 = require('./../node_modules/uuid/v1.js');
const v3 = require('./../node_modules/uuid/v3.js');
const v4 = require('./../node_modules/uuid/v4.js');
const v5 = require('./../node_modules/uuid/v5.js');

const uuid = {
  uuidv1: v1,
  uuidv3: v3,
  uuidv5: v5,
  uuidv4: v4
};

module.exports = uuid;