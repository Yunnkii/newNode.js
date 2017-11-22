'use strict';
var fs = require('fs');
var text = fs.readFileSync('readme.md','utf-8');
console.log(text);