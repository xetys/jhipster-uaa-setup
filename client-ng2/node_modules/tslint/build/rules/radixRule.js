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
        var radixWalker = new RadixWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(radixWalker);
    };
    Rule.FAILURE_STRING = "missing radix parameter";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var RadixWalker = (function (_super) {
    __extends(RadixWalker, _super);
    function RadixWalker() {
        _super.apply(this, arguments);
    }
    RadixWalker.prototype.visitCallExpression = function (node) {
        var expression = node.expression;
        if (expression.kind === 63 /* Identifier */ && node.getFirstToken().getText() === "parseInt" && node.arguments.length < 2) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
        _super.prototype.visitCallExpression.call(this, node);
    };
    return RadixWalker;
})(Lint.RuleWalker);
