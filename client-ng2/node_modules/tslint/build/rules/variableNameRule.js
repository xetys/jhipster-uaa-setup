var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OPTION_LEADING_UNDERSCORE = "allow-leading-underscore";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        var variableNameWalker = new VariableNameWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(variableNameWalker);
    };
    Rule.FAILURE_STRING = "variable name must be in camelcase or uppercase";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var VariableNameWalker = (function (_super) {
    __extends(VariableNameWalker, _super);
    function VariableNameWalker() {
        _super.apply(this, arguments);
    }
    VariableNameWalker.prototype.visitPropertyDeclaration = function (node) {
        if (node.name != null && node.name.kind === 63 /* Identifier */) {
            this.handleVariableName(node.name);
        }
        _super.prototype.visitPropertyDeclaration.call(this, node);
    };
    VariableNameWalker.prototype.visitVariableDeclaration = function (node) {
        this.handleVariableName(node.name);
        _super.prototype.visitVariableDeclaration.call(this, node);
    };
    VariableNameWalker.prototype.visitVariableStatement = function (node) {
        var hasDeclareModifier = (node.modifiers != null) && (node.modifiers.length > 0) && (node.modifiers[0].kind === 112 /* DeclareKeyword */);
        if (!hasDeclareModifier) {
            _super.prototype.visitVariableStatement.call(this, node);
        }
    };
    VariableNameWalker.prototype.handleVariableName = function (name) {
        var variableName = name.text;
        if (!this.isCamelCase(variableName) && !this.isUpperCase(variableName)) {
            this.addFailure(this.createFailure(name.getStart(), name.getWidth(), Rule.FAILURE_STRING));
        }
    };
    VariableNameWalker.prototype.isCamelCase = function (name) {
        var firstCharacter = name.charAt(0);
        var rest = name.substring(1);
        if (name.length <= 0) {
            return true;
        }
        else if (!this.hasOption(OPTION_LEADING_UNDERSCORE) && firstCharacter === "_") {
            return false;
        }
        return firstCharacter === firstCharacter.toLowerCase() && rest.indexOf("_") === -1;
    };
    VariableNameWalker.prototype.isUpperCase = function (name) {
        return name === name.toUpperCase();
    };
    return VariableNameWalker;
})(Lint.RuleWalker);
