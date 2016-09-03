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
        var useStrictWalker = new UseStrictWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(useStrictWalker);
    };
    Rule.FAILURE_STRING = "missing 'use strict'";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var UseStrictWalker = (function (_super) {
    __extends(UseStrictWalker, _super);
    function UseStrictWalker() {
        _super.apply(this, arguments);
    }
    UseStrictWalker.prototype.createScope = function () {
        return {};
    };
    UseStrictWalker.prototype.visitModuleDeclaration = function (node) {
        var modifiers = node.modifiers;
        var hasDeclareModifier = (modifiers != null) && (modifiers.length > 0) && (modifiers[0].kind === 112 /* DeclareKeyword */);
        if (this.getCurrentDepth() === 2 && !hasDeclareModifier) {
            if (this.hasOption(UseStrictWalker.OPTION_CHECK_MODULE) && node.body != null && node.body.kind === 190 /* ModuleBlock */ && this.hasOption(UseStrictWalker.OPTION_CHECK_MODULE)) {
                this.handleBlock(node, node.body);
            }
        }
        _super.prototype.visitModuleDeclaration.call(this, node);
    };
    UseStrictWalker.prototype.visitFunctionDeclaration = function (node) {
        if (this.getCurrentDepth() === 2 && this.hasOption(UseStrictWalker.OPTION_CHECK_FUNCTION) && node.body != null) {
            this.handleBlock(node, node.body);
        }
        _super.prototype.visitFunctionDeclaration.call(this, node);
    };
    UseStrictWalker.prototype.handleBlock = function (node, block) {
        var isFailure = true;
        if (block.statements != null && block.statements.length > 0) {
            var firstStatement = block.statements[0];
            if (firstStatement.kind === 166 /* ExpressionStatement */ && firstStatement.getChildCount() === 2) {
                var firstChild = firstStatement.getChildAt(0);
                var secondChild = firstStatement.getChildAt(1);
                if (firstChild.kind === 7 /* StringLiteral */ && firstChild.text === UseStrictWalker.USE_STRICT_STRING && secondChild.kind === 21 /* SemicolonToken */) {
                    isFailure = false;
                }
            }
        }
        if (isFailure) {
            this.addFailure(this.createFailure(node.getStart(), node.getFirstToken().getWidth(), Rule.FAILURE_STRING));
        }
    };
    UseStrictWalker.OPTION_CHECK_FUNCTION = "check-function";
    UseStrictWalker.OPTION_CHECK_MODULE = "check-module";
    UseStrictWalker.USE_STRICT_STRING = "use strict";
    return UseStrictWalker;
})(Lint.ScopeAwareRuleWalker);
