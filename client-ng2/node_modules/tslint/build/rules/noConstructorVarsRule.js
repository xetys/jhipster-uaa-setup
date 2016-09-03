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
        return this.applyWithWalker(new NoConstructorVariableDeclarationsWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING_PART = " cannot be declared in the constructor";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NoConstructorVariableDeclarationsWalker = (function (_super) {
    __extends(NoConstructorVariableDeclarationsWalker, _super);
    function NoConstructorVariableDeclarationsWalker() {
        _super.apply(this, arguments);
    }
    NoConstructorVariableDeclarationsWalker.prototype.visitConstructorDeclaration = function (node) {
        var _this = this;
        var parameters = node.parameters;
        parameters.forEach(function (parameter) {
            if (parameter.modifiers != null && parameter.modifiers.length > 0) {
                var lastModifier = parameter.modifiers[parameter.modifiers.length - 1];
                _this.addFailure(_this.createFailure(parameter.getStart(), lastModifier.getEnd() - parameter.getStart(), "'" + parameter.name.text + "'" + Rule.FAILURE_STRING_PART));
            }
        });
        _super.prototype.visitConstructorDeclaration.call(this, node);
    };
    return NoConstructorVariableDeclarationsWalker;
})(Lint.RuleWalker);
exports.NoConstructorVariableDeclarationsWalker = NoConstructorVariableDeclarationsWalker;
