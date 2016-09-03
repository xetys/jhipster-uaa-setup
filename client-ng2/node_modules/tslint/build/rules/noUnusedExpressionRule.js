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
        return this.applyWithWalker(new UnusedExpressionWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "expected an assignment or function call";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var UnusedExpressionWalker = (function (_super) {
    __extends(UnusedExpressionWalker, _super);
    function UnusedExpressionWalker(sourceFile, options) {
        _super.call(this, sourceFile, options);
        this.expressionIsUnused = true;
    }
    UnusedExpressionWalker.prototype.visitExpressionStatement = function (node) {
        this.expressionIsUnused = true;
        _super.prototype.visitExpressionStatement.call(this, node);
        if (this.expressionIsUnused) {
            if (node.expression.kind === 7 /* StringLiteral */) {
                var expressionText = node.expression.getText();
                if (expressionText === "\"use strict\"" || expressionText === "'use strict'") {
                    return;
                }
            }
            else if (node.expression.kind === 152 /* DeleteExpression */) {
                return;
            }
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        }
    };
    UnusedExpressionWalker.prototype.visitBinaryExpression = function (node) {
        _super.prototype.visitBinaryExpression.call(this, node);
        switch (node.operator) {
            case 51 /* EqualsToken */:
            case 52 /* PlusEqualsToken */:
            case 53 /* MinusEqualsToken */:
            case 54 /* AsteriskEqualsToken */:
            case 55 /* SlashEqualsToken */:
            case 56 /* PercentEqualsToken */:
            case 60 /* AmpersandEqualsToken */:
            case 62 /* CaretEqualsToken */:
            case 61 /* BarEqualsToken */:
            case 57 /* LessThanLessThanEqualsToken */:
            case 58 /* GreaterThanGreaterThanEqualsToken */:
            case 59 /* GreaterThanGreaterThanGreaterThanEqualsToken */:
                this.expressionIsUnused = false;
                break;
            default:
                this.expressionIsUnused = true;
        }
    };
    UnusedExpressionWalker.prototype.visitPrefixUnaryExpression = function (node) {
        _super.prototype.visitPrefixUnaryExpression.call(this, node);
        switch (node.operator) {
            case 37 /* PlusPlusToken */:
            case 38 /* MinusMinusToken */:
                this.expressionIsUnused = false;
                break;
            default:
                this.expressionIsUnused = true;
        }
    };
    UnusedExpressionWalker.prototype.visitPostfixUnaryExpression = function (node) {
        _super.prototype.visitPostfixUnaryExpression.call(this, node);
        this.expressionIsUnused = false;
    };
    UnusedExpressionWalker.prototype.visitBlock = function (node) {
        _super.prototype.visitBlock.call(this, node);
        this.expressionIsUnused = true;
    };
    UnusedExpressionWalker.prototype.visitArrowFunction = function (node) {
        _super.prototype.visitArrowFunction.call(this, node);
        this.expressionIsUnused = true;
    };
    UnusedExpressionWalker.prototype.visitCallExpression = function (node) {
        _super.prototype.visitCallExpression.call(this, node);
        this.expressionIsUnused = false;
    };
    UnusedExpressionWalker.prototype.visitConditionalExpression = function (node) {
        this.visitNode(node.condition);
        this.expressionIsUnused = true;
        this.visitNode(node.whenTrue);
        var firstExpressionIsUnused = this.expressionIsUnused;
        this.expressionIsUnused = true;
        this.visitNode(node.whenFalse);
        var secondExpressionIsUnused = this.expressionIsUnused;
        this.expressionIsUnused = firstExpressionIsUnused || secondExpressionIsUnused;
    };
    return UnusedExpressionWalker;
})(Lint.RuleWalker);
