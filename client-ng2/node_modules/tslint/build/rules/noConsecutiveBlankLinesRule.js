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
        return this.applyWithWalker(new BlankLinesWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "consecutive blank lines are disallowed";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var BlankLinesWalker = (function (_super) {
    __extends(BlankLinesWalker, _super);
    function BlankLinesWalker() {
        _super.apply(this, arguments);
    }
    BlankLinesWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        var newLinesInARowSeenSoFar = 1;
        Lint.scanAllTokens(ts.createScanner(1 /* ES5 */, false, node.text), function (scanner) {
            if (scanner.getToken() === 4 /* NewLineTrivia */) {
                newLinesInARowSeenSoFar += 1;
                if (newLinesInARowSeenSoFar >= 3) {
                    var failure = _this.createFailure(scanner.getStartPos(), 1, Rule.FAILURE_STRING);
                    _this.addFailure(failure);
                }
            }
            else {
                newLinesInARowSeenSoFar = 0;
            }
        });
    };
    return BlankLinesWalker;
})(Lint.RuleWalker);
