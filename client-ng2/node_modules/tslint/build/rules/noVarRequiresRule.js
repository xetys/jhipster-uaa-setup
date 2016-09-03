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
        var requiresWalker = new RequiresWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(requiresWalker);
    };
    Rule.FAILURE_STRING = "require statement not part of an import statment";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var RequiresWalker = (function (_super) {
    __extends(RequiresWalker, _super);
    function RequiresWalker(sourceFile, options) {
        _super.call(this, sourceFile, options);
    }
    RequiresWalker.prototype.createScope = function () {
        return {};
    };
    RequiresWalker.prototype.visitCallExpression = function (node) {
        var expression = node.expression;
        if (this.getCurrentDepth() <= 1 && expression.kind === 63 /* Identifier */) {
            var identifierName = expression.text;
            if (identifierName === "require") {
                this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
            }
        }
        _super.prototype.visitCallExpression.call(this, node);
    };
    return RequiresWalker;
})(Lint.ScopeAwareRuleWalker);
