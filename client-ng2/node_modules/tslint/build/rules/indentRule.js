var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OPTION_USE_TABS = "tabs";
var OPTION_USE_SPACES = "spaces";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new IndentWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING_TABS = "tab indentation expected";
    Rule.FAILURE_STRING_SPACES = "space indentation expected";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var IndentWalker = (function (_super) {
    __extends(IndentWalker, _super);
    function IndentWalker(sourceFile, options) {
        _super.call(this, sourceFile, options);
        if (this.hasOption(OPTION_USE_TABS)) {
            this.regExp = new RegExp(" ");
            this.failureString = Rule.FAILURE_STRING_TABS;
        }
        else if (this.hasOption(OPTION_USE_SPACES)) {
            this.regExp = new RegExp("\t");
            this.failureString = Rule.FAILURE_STRING_SPACES;
        }
    }
    IndentWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        if (!this.hasOption(OPTION_USE_TABS) && !this.hasOption(OPTION_USE_SPACES)) {
            return;
        }
        var scanner = ts.createScanner(1 /* ES5 */, false, node.text);
        var lineStarts = node.getLineStarts();
        lineStarts.forEach(function (lineStart) {
            scanner.setTextPos(lineStart);
            var currentScannedType = scanner.scan();
            var fullLeadingWhitespace = "";
            var lastStartPos = -1;
            while (currentScannedType === 5 /* WhitespaceTrivia */) {
                var startPos = scanner.getStartPos();
                if (startPos === lastStartPos) {
                    break;
                }
                lastStartPos = startPos;
                fullLeadingWhitespace += scanner.getTokenText();
                currentScannedType = scanner.scan();
            }
            if (currentScannedType === 2 /* SingleLineCommentTrivia */ || currentScannedType === 3 /* MultiLineCommentTrivia */ || currentScannedType === 4 /* NewLineTrivia */) {
                return;
            }
            if (fullLeadingWhitespace.match(_this.regExp)) {
                _this.addFailure(_this.createFailure(lineStart, fullLeadingWhitespace.length, _this.failureString));
            }
        });
    };
    return IndentWalker;
})(Lint.RuleWalker);
