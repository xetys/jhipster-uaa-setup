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
        return this.applyWithWalker(new JsdocWalker(sourceFile, this.getOptions()));
    };
    Rule.ALIGNMENT_FAILURE_STRING = "asterisks in jsdoc must be aligned";
    Rule.FORMAT_FAILURE_STRING = "jsdoc is not formatted correctly on this line";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var JsdocWalker = (function (_super) {
    __extends(JsdocWalker, _super);
    function JsdocWalker() {
        _super.apply(this, arguments);
    }
    JsdocWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        Lint.scanAllTokens(ts.createScanner(1 /* ES5 */, false, node.text), function (scanner) {
            if (scanner.getToken() === 3 /* MultiLineCommentTrivia */) {
                var commentText = scanner.getTokenText();
                var startPosition = scanner.getTokenPos();
                _this.findFailuresForJsdocComment(commentText, startPosition, node);
            }
        });
    };
    JsdocWalker.prototype.findFailuresForJsdocComment = function (commentText, startingPosition, sourceFile) {
        var _this = this;
        var currentPosition = startingPosition;
        var lines = commentText.split("\n");
        var jsdocPosition = currentPosition;
        var firstLine = lines[0];
        var isJsdocMatch = firstLine.match(/^\s*\/\*\*/);
        if (isJsdocMatch != null) {
            if (lines.length === 1) {
                var firstLineMatch = firstLine.match(/^\s*\/\*\* (.* )?\*\/$/);
                if (firstLineMatch == null) {
                    this.addFailureAt(jsdocPosition, firstLine.length, Rule.FORMAT_FAILURE_STRING);
                }
                return;
            }
            var indexToMatch = firstLine.indexOf("**") + sourceFile.getLineAndCharacterFromPosition(currentPosition).character - 1;
            var otherLines = lines.splice(1, lines.length - 2);
            jsdocPosition += firstLine.length + 1;
            otherLines.forEach(function (line) {
                var asteriskMatch = line.match(/^\s*\*( |$)/);
                if (asteriskMatch == null) {
                    _this.addFailureAt(jsdocPosition, line.length, Rule.FORMAT_FAILURE_STRING);
                }
                var asteriskIndex = line.indexOf("*");
                if (asteriskIndex !== indexToMatch) {
                    _this.addFailureAt(jsdocPosition, line.length, Rule.ALIGNMENT_FAILURE_STRING);
                }
                jsdocPosition += line.length + 1;
            });
            var lastLine = lines[lines.length - 1];
            var endBlockCommentMatch = lastLine.match(/^\s*\*\/$/);
            if (endBlockCommentMatch == null) {
                this.addFailureAt(jsdocPosition, lastLine.length, Rule.FORMAT_FAILURE_STRING);
            }
            var lastAsteriskIndex = lastLine.indexOf("*");
            if (lastAsteriskIndex !== indexToMatch) {
                this.addFailureAt(jsdocPosition, lastLine.length, Rule.ALIGNMENT_FAILURE_STRING);
            }
        }
    };
    JsdocWalker.prototype.addFailureAt = function (currentPosition, width, failureString) {
        var failure = this.createFailure(currentPosition, width, failureString);
        this.addFailure(failure);
    };
    return JsdocWalker;
})(Lint.RuleWalker);
