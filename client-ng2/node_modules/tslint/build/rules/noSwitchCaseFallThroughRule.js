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
        return this.applyWithWalker(new NoSwitchCaseFallThroughWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING_PART = "Expected a 'break' before ";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NoSwitchCaseFallThroughWalker = (function (_super) {
    __extends(NoSwitchCaseFallThroughWalker, _super);
    function NoSwitchCaseFallThroughWalker() {
        _super.apply(this, arguments);
    }
    NoSwitchCaseFallThroughWalker.prototype.visitSwitchStatement = function (node) {
        var _this = this;
        var isFallingThrough = false;
        var switchClauses = node.clauses;
        switchClauses.forEach(function (child, i) {
            var kind = child.kind;
            if (kind === 194 /* CaseClause */) {
                var switchClause = child;
                isFallingThrough = _this.fallsThrough(switchClause.statements);
                if (isFallingThrough && switchClause.statements.length > 0 && ((switchClauses.length - 1) > i)) {
                    if (!_this.fallThroughAllowed(switchClauses[i + 1])) {
                        _this.addFailure(_this.createFailure(child.getEnd(), 1, Rule.FAILURE_STRING_PART + "'case'"));
                    }
                }
            }
            else {
                if (isFallingThrough && !_this.fallThroughAllowed(child)) {
                    var failureString = Rule.FAILURE_STRING_PART + "'default'";
                    _this.addFailure(_this.createFailure(switchClauses[i - 1].getEnd(), 1, failureString));
                }
            }
        });
        _super.prototype.visitSwitchStatement.call(this, node);
    };
    NoSwitchCaseFallThroughWalker.prototype.fallThroughAllowed = function (nextCaseOrDefaultStatement) {
        var sourceFileText = nextCaseOrDefaultStatement.getSourceFile().text;
        var childCount = nextCaseOrDefaultStatement.getChildCount();
        var firstChild = nextCaseOrDefaultStatement.getChildAt(0);
        var commentRanges = ts.getLeadingCommentRanges(sourceFileText, firstChild.getFullStart());
        if (commentRanges != null) {
            for (var i = 0; i < commentRanges.length; i++) {
                var commentRange = commentRanges[i];
                var commentText = sourceFileText.substring(commentRange.pos, commentRange.end);
                if (commentText === "/* falls through */") {
                    return true;
                }
            }
        }
        return false;
    };
    NoSwitchCaseFallThroughWalker.prototype.fallsThrough = function (list) {
        for (var i = 0; i < list.length; i++) {
            var nodeKind = list[i].kind;
            if (nodeKind === 173 /* BreakStatement */ || nodeKind === 178 /* ThrowStatement */ || nodeKind === 174 /* ReturnStatement */) {
                return false;
            }
        }
        return true;
    };
    return NoSwitchCaseFallThroughWalker;
})(Lint.RuleWalker);
exports.NoSwitchCaseFallThroughWalker = NoSwitchCaseFallThroughWalker;
