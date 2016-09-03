var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OPTION_SPACE = "check-space";
var OPTION_LOWERCASE = "check-lowercase";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new CommentWalker(sourceFile, this.getOptions()));
    };
    Rule.LOWERCASE_FAILURE = "comment must start with lowercase letter";
    Rule.LEADING_SPACE_FAILURE = "comment must start with a space";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var CommentWalker = (function (_super) {
    __extends(CommentWalker, _super);
    function CommentWalker(sourceFile, options) {
        _super.call(this, sourceFile, options);
        this.tokensToSkipStartEndMap = {};
    }
    CommentWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        _super.prototype.visitSourceFile.call(this, node);
        Lint.scanAllTokens(ts.createScanner(1 /* ES5 */, false, node.text), function (scanner) {
            var startPos = scanner.getStartPos();
            if (_this.tokensToSkipStartEndMap[startPos] != null) {
                scanner.setTextPos(_this.tokensToSkipStartEndMap[startPos]);
                return;
            }
            if (scanner.getToken() === 2 /* SingleLineCommentTrivia */) {
                var commentText = scanner.getTokenText();
                var startPosition = scanner.getTokenPos() + 2;
                var width = commentText.length - 2;
                if (_this.hasOption(OPTION_SPACE)) {
                    if (!_this.startsWithSpace(commentText)) {
                        var leadingSpaceFailure = _this.createFailure(startPosition, width, Rule.LEADING_SPACE_FAILURE);
                        _this.addFailure(leadingSpaceFailure);
                    }
                }
                if (_this.hasOption(OPTION_LOWERCASE)) {
                    if (!_this.startsWithLowercase(commentText)) {
                        var lowercaseFailure = _this.createFailure(startPosition, width, Rule.LOWERCASE_FAILURE);
                        _this.addFailure(lowercaseFailure);
                    }
                }
            }
        });
    };
    CommentWalker.prototype.visitRegularExpressionLiteral = function (node) {
        this.addTokenToSkipFromNode(node);
        _super.prototype.visitRegularExpressionLiteral.call(this, node);
    };
    CommentWalker.prototype.visitIdentifier = function (node) {
        this.addTokenToSkipFromNode(node);
        _super.prototype.visitIdentifier.call(this, node);
    };
    CommentWalker.prototype.visitTemplateExpression = function (node) {
        this.addTokenToSkipFromNode(node);
        _super.prototype.visitTemplateExpression.call(this, node);
    };
    CommentWalker.prototype.addTokenToSkipFromNode = function (node) {
        if (node.getStart() < node.getEnd()) {
            this.tokensToSkipStartEndMap[node.getStart()] = node.getEnd();
        }
    };
    CommentWalker.prototype.startsWithSpace = function (commentText) {
        if (commentText.length <= 2) {
            return true;
        }
        if ((/^#(end)?region/).test(commentText.substring(2))) {
            return true;
        }
        var firstCharacter = commentText.charAt(2);
        return firstCharacter === " " || firstCharacter === "/";
    };
    CommentWalker.prototype.startsWithLowercase = function (commentText) {
        if (commentText.length <= 2) {
            return true;
        }
        var firstCharacterMatch = commentText.match(/^\/\/\s*(\w)/);
        if (firstCharacterMatch != null) {
            var firstCharacter = firstCharacterMatch[1];
            return firstCharacter === firstCharacter.toLowerCase();
        }
        else {
            return true;
        }
    };
    return CommentWalker;
})(Lint.RuleWalker);
