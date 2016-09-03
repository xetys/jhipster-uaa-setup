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
        return this.applyWithWalker(new NameWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "name must be in pascal case";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NameWalker = (function (_super) {
    __extends(NameWalker, _super);
    function NameWalker() {
        _super.apply(this, arguments);
    }
    NameWalker.prototype.visitClassDeclaration = function (node) {
        var className = node.name.getText();
        if (!this.isPascalCased(className)) {
            this.addFailureAt(node.name.getStart(), node.name.getWidth());
        }
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    NameWalker.prototype.visitInterfaceDeclaration = function (node) {
        var interfaceName = node.name.getText();
        if (!this.isPascalCased(interfaceName)) {
            this.addFailureAt(node.name.getStart(), node.name.getWidth());
        }
        _super.prototype.visitInterfaceDeclaration.call(this, node);
    };
    NameWalker.prototype.isPascalCased = function (name) {
        if (name.length <= 0) {
            return true;
        }
        var firstCharacter = name.charAt(0);
        return ((firstCharacter === firstCharacter.toUpperCase()) && name.indexOf("_") === -1);
    };
    NameWalker.prototype.addFailureAt = function (position, width) {
        var failure = this.createFailure(position, width, Rule.FAILURE_STRING);
        this.addFailure(failure);
    };
    return NameWalker;
})(Lint.RuleWalker);
