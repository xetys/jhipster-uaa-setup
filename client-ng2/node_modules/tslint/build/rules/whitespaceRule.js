var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OPTION_BRANCH = "check-branch";
var OPTION_DECL = "check-decl";
var OPTION_OPERATOR = "check-operator";
var OPTION_SEPARATOR = "check-separator";
var OPTION_TYPE = "check-type";
var OPTION_TYPECAST = "check-typecast";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new WhitespaceWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = "missing whitespace";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var WhitespaceWalker = (function (_super) {
    __extends(WhitespaceWalker, _super);
    function WhitespaceWalker(sourceFile, options) {
        _super.call(this, sourceFile, options);
        this.scanner = ts.createScanner(1 /* ES5 */, false, sourceFile.text);
        this.tokensToSkipStartEndMap = {};
    }
    WhitespaceWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        _super.prototype.visitSourceFile.call(this, node);
        var lastShouldBeFollowedByWhitespace = false;
        this.scanner.setTextPos(0);
        Lint.scanAllTokens(this.scanner, function (scanner) {
            var startPos = scanner.getStartPos();
            var tokenKind = scanner.getToken();
            if (tokenKind === 5 /* WhitespaceTrivia */ || tokenKind === 4 /* NewLineTrivia */) {
                lastShouldBeFollowedByWhitespace = false;
            }
            else if (lastShouldBeFollowedByWhitespace) {
                var failure = _this.createFailure(startPos, 1, Rule.FAILURE_STRING);
                _this.addFailure(failure);
                lastShouldBeFollowedByWhitespace = false;
            }
            if (_this.tokensToSkipStartEndMap[startPos] != null) {
                scanner.setTextPos(_this.tokensToSkipStartEndMap[startPos]);
                return;
            }
            switch (tokenKind) {
                case 66 /* CatchKeyword */:
                case 80 /* ForKeyword */:
                case 82 /* IfKeyword */:
                case 90 /* SwitchKeyword */:
                case 98 /* WhileKeyword */:
                case 99 /* WithKeyword */:
                    if (_this.hasOption(OPTION_BRANCH)) {
                        lastShouldBeFollowedByWhitespace = true;
                    }
                    break;
                case 22 /* CommaToken */:
                case 21 /* SemicolonToken */:
                    if (_this.hasOption(OPTION_SEPARATOR)) {
                        lastShouldBeFollowedByWhitespace = true;
                    }
                    break;
                case 51 /* EqualsToken */:
                    if (_this.hasOption(OPTION_DECL)) {
                        lastShouldBeFollowedByWhitespace = true;
                    }
                    break;
                case 50 /* ColonToken */:
                    if (_this.hasOption(OPTION_TYPE)) {
                        lastShouldBeFollowedByWhitespace = true;
                    }
                    break;
            }
        });
    };
    WhitespaceWalker.prototype.visitRegularExpressionLiteral = function (node) {
        this.addTokenToSkipFromNode(node);
        _super.prototype.visitRegularExpressionLiteral.call(this, node);
    };
    WhitespaceWalker.prototype.visitIdentifier = function (node) {
        this.addTokenToSkipFromNode(node);
        _super.prototype.visitIdentifier.call(this, node);
    };
    WhitespaceWalker.prototype.visitTemplateExpression = function (node) {
        this.addTokenToSkipFromNode(node);
        _super.prototype.visitTemplateExpression.call(this, node);
    };
    WhitespaceWalker.prototype.addTokenToSkipFromNode = function (node) {
        if (node.getStart() < node.getEnd()) {
            this.tokensToSkipStartEndMap[node.getStart()] = node.getEnd();
        }
    };
    WhitespaceWalker.prototype.visitBinaryExpression = function (node) {
        var operatorKind = node.operator;
        if (this.hasOption(OPTION_OPERATOR) && operatorKind !== 22 /* CommaToken */) {
            var position = node.left.getEnd();
            this.checkForTrailingWhitespace(position);
            position = node.right.getFullStart();
            this.checkForTrailingWhitespace(position);
        }
        _super.prototype.visitBinaryExpression.call(this, node);
    };
    WhitespaceWalker.prototype.visitArrowFunction = function (node) {
        this.checkEqualsGreaterThanTokenInNode(node);
        _super.prototype.visitArrowFunction.call(this, node);
    };
    WhitespaceWalker.prototype.visitConstructorType = function (node) {
        this.checkEqualsGreaterThanTokenInNode(node);
        _super.prototype.visitConstructorType.call(this, node);
    };
    WhitespaceWalker.prototype.visitFunctionType = function (node) {
        this.checkEqualsGreaterThanTokenInNode(node);
        _super.prototype.visitFunctionType.call(this, node);
    };
    WhitespaceWalker.prototype.visitConditionalExpression = function (node) {
        if (this.hasOption(OPTION_OPERATOR)) {
            var position = node.condition.getEnd();
            this.checkForTrailingWhitespace(position);
            position = node.whenTrue.getFullStart();
            this.checkForTrailingWhitespace(position);
            position = node.whenTrue.getEnd();
            this.checkForTrailingWhitespace(position);
        }
        _super.prototype.visitConditionalExpression.call(this, node);
    };
    WhitespaceWalker.prototype.visitVariableDeclaration = function (node) {
        if (this.hasOption(OPTION_DECL) && node.initializer != null) {
            if (node.type != null) {
                this.checkForTrailingWhitespace(node.type.getEnd());
            }
            else {
                this.checkForTrailingWhitespace(node.name.getEnd());
            }
        }
        _super.prototype.visitVariableDeclaration.call(this, node);
    };
    WhitespaceWalker.prototype.visitImportDeclaration = function (node) {
        if (this.hasOption(OPTION_DECL)) {
            var position = node.name.getEnd();
            this.checkForTrailingWhitespace(position);
        }
        _super.prototype.visitImportDeclaration.call(this, node);
    };
    WhitespaceWalker.prototype.visitExportAssignment = function (node) {
        if (this.hasOption(OPTION_DECL)) {
            var exportKeyword = node.getChildAt(0);
            var position = exportKeyword.getEnd();
            this.checkForTrailingWhitespace(position);
        }
        _super.prototype.visitExportAssignment.call(this, node);
    };
    WhitespaceWalker.prototype.visitTypeAssertionExpression = function (node) {
        if (this.hasOption(OPTION_TYPECAST)) {
            var position = node.expression.getFullStart();
            this.checkForTrailingWhitespace(position);
        }
        _super.prototype.visitTypeAssertionExpression.call(this, node);
    };
    WhitespaceWalker.prototype.checkEqualsGreaterThanTokenInNode = function (node) {
        var arrowChildNumber = -1;
        node.getChildren().forEach(function (child, i) {
            if (child.kind === 31 /* EqualsGreaterThanToken */) {
                arrowChildNumber = i;
            }
        });
        if (arrowChildNumber !== -1) {
            var equalsGreaterThanToken = node.getChildAt(arrowChildNumber);
            if (this.hasOption(OPTION_OPERATOR)) {
                var position = equalsGreaterThanToken.getFullStart();
                this.checkForTrailingWhitespace(position);
                position = equalsGreaterThanToken.getEnd();
                this.checkForTrailingWhitespace(position);
            }
        }
    };
    WhitespaceWalker.prototype.checkForTrailingWhitespace = function (position) {
        this.scanner.setTextPos(position);
        var nextTokenType = this.scanner.scan();
        if (nextTokenType !== 5 /* WhitespaceTrivia */ && nextTokenType !== 4 /* NewLineTrivia */ && nextTokenType !== 1 /* EndOfFileToken */) {
            var failure = this.createFailure(position, 1, Rule.FAILURE_STRING);
            this.addFailure(failure);
        }
    };
    return WhitespaceWalker;
})(Lint.RuleWalker);
