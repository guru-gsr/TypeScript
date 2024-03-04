"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identityOne(val) {
    return val;
}
//identityTwo<Bottle>({})
function getSerchProducts(products) {
    return products[3];
}
//Arrow function
var getMore = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFunction(3, "4");
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
