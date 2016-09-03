var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoBitwiseWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "forbidden bitwise operation";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NoBitwiseWalker = (function (_super) {
    __extends(NoBitwiseWalker, _super);
    function NoBitwiseWalker() {
        _super.apply(this, arguments);
    }
    NoBitwiseWalker.prototype.visitBinaryExpression = function (node) {
        switch (node.operator) {
            case 42 /* AmpersandToken */:
            case 60 /* AmpersandEqualsToken */:
            case 43 /* BarToken */:
            case 61 /* BarEqualsToken */:
            case 44 /* CaretToken */:
            case 62 /* CaretEqualsToken */:
            case 39 /* LessThanLessThanToken */:
            case 57 /* LessThanLessThanEqualsToken */:
            case 40 /* GreaterThanGreaterThanToken */:
            case 58 /* GreaterThanGreaterThanEqualsToken */:
            case 41 /* GreaterThanGreaterThanGreaterThanToken */:
            case 59 /* GreaterThanGreaterThanGreaterThanEqualsToken */:
                this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
                break;
        }
        _super.prototype.visitBinaryExpression.call(this, node);
    };
    NoBitwiseWalker.prototype.visitPrefixUnaryExpression = function (node) {
        if (node.operator === 46 /* TildeToken */) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
        _super.prototype.visitPrefixUnaryExpression.call(this, node);
    };
    return NoBitwiseWalker;
})(Lint.RuleWalker);
