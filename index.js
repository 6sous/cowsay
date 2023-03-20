const myInfo = require('./information')

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi , I'm ${myInfo.name} and I learn code in ${myInfo.campus}`,
    e : "oO",
    T : "U "
}));
