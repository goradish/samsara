/* Copyright © 2015 David Valdman */

define(function(require, exports, module) {
    var counter = 0;

    /**
     * Register provides a unique Id for every commitable object for later reference.
     *
     * @class register
     * @namespace Core
     * @private
     */
    module.exports = function register(commitable){
        commitable._id = counter;
        return counter++;
    }
});