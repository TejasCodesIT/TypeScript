// class Person {
//     private readonly name: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    // using protected for these members allows access from classes that extend from this class, such as Square
    function Rectangle(width1, height1) {
        this.width1 = width1;
        this.height1 = height1;
    }
    Rectangle.prototype.getArea = function () {
        return this.width1 * this.height1;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width1, ", height=").concat(this.height1, "]");
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width1) {
        return _super.call(this, width1, width1) || this;
    }
    // this toString replaces the toString from Rectangle
    Square.prototype.toString = function () {
        return "Square[width=".concat(this.width1, "]");
    };
    return Square;
}(Rectangle));
var mySq = new Square(20);
var myRec = new Rectangle(30, 60);
console.log(mySq.toString());
console.log(myRec.toString());
