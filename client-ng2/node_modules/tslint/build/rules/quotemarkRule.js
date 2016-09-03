var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var QuoteMark;
(function (QuoteMark) {
    QuoteMark[QuoteMark["SINGLE_QUOTES"] = 0] = "SINGLE_QUOTES";
    QuoteMark[QuoteMark["DOUBLE_QUOTES"] = 1] = "DOUBLE_QUOTES";
})(QuoteMark || (QuoteMark = {}));
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.isEnabled = function () {
        if (_super.prototype.isEnabled.call(this)) {
            var quoteMarkString = this.getOptions().ruleArguments[0];
            return (quoteMarkString === "single" || quoteMarkString === "double");
        }
        return false;
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new QuoteWalker(sourceFile, this.getOptions()));
    };
    Rule.SINGLE_QUOTE_FAILURE = "\" should be '";
    Rule.DOUBLE_QUOTE_FAILURE = "' should be \"";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var QuoteWalker = (function (_super) {
    __extends(QuoteWalker, _super);
    function QuoteWalker(sourceFile, options) {
        _super.call(this, sourceFile, options);
        var quoteMarkString = this.getOptions()[0];
        if (quoteMarkString === "single") {
            this.quoteMark = 0 /* SINGLE_QUOTES */;
        }
        else {
            this.quoteMark = 1 /* DOUBLE_QUOTES */;
        }
    }
    QuoteWalker.prototype.visitNode = function (node) {
        this.handleNode(node);
        _super.prototype.visitNode.call(this, node);
    };
    QuoteWalker.prototype.handleNode = function (node) {
        var failure = null;
        if (node.kind === 7 /* StringLiteral */) {
            var text = node.getText();
            var width = node.getWidth();
            var position = node.getStart();
            var firstCharacter = text.charAt(0);
            var lastCharacter = text.charAt(text.length - 1);
            if (this.quoteMark === 0 /* SINGLE_QUOTES */) {
                if (firstCharacter !== "'" || lastCharacter !== "'") {
                    failure = this.createFailure(position, width, Rule.SINGLE_QUOTE_FAILURE);
                }
            }
            else if (this.quoteMark === 1 /* DOUBLE_QUOTES */) {
                if (firstCharacter !== "\"" || lastCharacter !== "\"") {
                    failure = this.createFailure(position, width, Rule.DOUBLE_QUOTE_FAILURE);
                }
            }
        }
        if (failure) {
            this.addFailure(failure);
        }
    };
    return QuoteWalker;
})(Lint.RuleWalker);
