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
        return this.applyWithWalker(new NoTrailingCommaWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "trailing comma";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NoTrailingCommaWalker = (function (_super) {
    __extends(NoTrailingCommaWalker, _super);
    function NoTrailingCommaWalker() {
        _super.apply(this, arguments);
    }
    NoTrailingCommaWalker.prototype.visitObjectLiteralExpression = function (node) {
        var child = node.getChildAt(1);
        if (child != null && child.kind === 203 /* SyntaxList */) {
            var grandChildren = child.getChildren();
            if (grandChildren.length > 0) {
                var lastGrandChild = grandChildren[grandChildren.length - 1];
                if (lastGrandChild.kind === 22 /* CommaToken */) {
                    this.addFailure(this.createFailure(lastGrandChild.getStart(), 1, Rule.FAILURE_STRING));
                }
            }
        }
        _super.prototype.visitObjectLiteralExpression.call(this, node);
    };
    return NoTrailingCommaWalker;
})(Lint.RuleWalker);
