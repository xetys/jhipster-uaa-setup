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
        return this.applyWithWalker(new LabelPosWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "unexpected label on statement";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var LabelPosWalker = (function (_super) {
    __extends(LabelPosWalker, _super);
    function LabelPosWalker() {
        _super.apply(this, arguments);
    }
    LabelPosWalker.prototype.visitLabeledStatement = function (node) {
        var statement = node.statement;
        if (statement.kind !== 168 /* DoStatement */ && statement.kind !== 170 /* ForStatement */ && statement.kind !== 171 /* ForInStatement */ && statement.kind !== 169 /* WhileStatement */ && statement.kind !== 176 /* SwitchStatement */) {
            var failure = this.createFailure(node.label.getStart(), node.label.getWidth(), Rule.FAILURE_STRING);
            this.addFailure(failure);
        }
        _super.prototype.visitLabeledStatement.call(this, node);
    };
    return LabelPosWalker;
})(Lint.RuleWalker);
