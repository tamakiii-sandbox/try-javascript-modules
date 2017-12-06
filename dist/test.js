"use strict";

var _User = require("./User");

var _User2 = _interopRequireDefault(_User);

var _Programmer = require("./Programmer");

var _Programmer2 = _interopRequireDefault(_Programmer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_User2.default);
console.log(_Programmer2.default);

var user = new _User2.default('John');
var programmer = new _Programmer2.default('Michel');

console.log(user);
console.log(programmer);