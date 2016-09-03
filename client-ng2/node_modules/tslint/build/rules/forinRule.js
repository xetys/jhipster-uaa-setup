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
        return this.applyWithWalker(new ForInWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "for (... in ...) statements must be filtered with an if statement";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var ForInWalker = (function (_super) {
    __extends(ForInWalker, _super);
    function ForInWalker() {
        _super.apply(this, arguments);
    }
    ForInWalker.prototype.visitForInStatement = function (node) {
        this.handleForInStatement(node);
        _super.prototype.visitForInStatement.call(this, node);
    };
    ForInWalker.prototype.handleForInStatement = function (node) {
        var statement = node.statement;
        var statementKind = node.statement.kind;
        if (statementKind === 167 /* IfStatement */) {
            return;
        }
        if (statementKind === 163 /* Block */) {
            var blockNode = statement;
            var blockStatements = blockNode.statements;
            if (blockStatements.length >= 1) {
                var firstBlockStatement = blockStatements[0];
                if (firstBlockStatement.kind === 167 /* IfStatement */) {
                    if (blockStatements.length === 1) {
                        return;
                    }
                    var ifStatement = firstBlockStatement.thenStatement;
                    if (this.nodeIsContinue(ifStatement)) {
                        return;
                    }
                }
            }
        }
        var failure = this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING);
        this.addFailure(failure);
    };
    ForInWalker.prototype.nodeIsContinue = function (node) {
        var kind = node.kind;
        if (kind === 172 /* ContinueStatement */) {
            return true;
        }
        if (kind === 163 /* Block */) {
            var blockStatements = node.statements;
            if (blockStatements.length === 1 && blockStatements[0].kind === 172 /* ContinueStatement */) {
                return true;
            }
        }
        return false;
    };
    return ForInWalker;
})(Lint.RuleWalker);
