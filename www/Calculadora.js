var exec = require('cordova/exec');



module.exports.sumar = function(arg0, success, error) {
    exec(success, error, 'Calculadora', 'sumar', [arg0]);
};