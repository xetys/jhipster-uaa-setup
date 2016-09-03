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
        var documentRegistry = ts.createDocumentRegistry();
        var languageServiceHost = Lint.createLanguageServiceHost("file.ts", sourceFile.getFullText());
        var languageService = ts.createLanguageService(languageServiceHost, documentRegistry);
        return this.applyWithWalker(new NoUseBeforeDeclareWalker(sourceFile, this.getOptions(), languageService));
    };
    Rule.FAILURE_STRING_PREFIX = "variable '";
    Rule.FAILURE_STRING_POSTFIX = "' used before declaration";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NoUseBeforeDeclareWalker = (function (_super) {
    __extends(NoUseBeforeDeclareWalker, _super);
    function NoUseBeforeDeclareWalker(sourceFile, options, languageService) {
        _super.call(this, sourceFile, options);
        this.languageService = languageService;
    }
    NoUseBeforeDeclareWalker.prototype.createScope = function () {
        return {};
    };
    NoUseBeforeDeclareWalker.prototype.visitImportDeclaration = function (node) {
        this.validateUsageForVariable(node.name.text, node.name.getStart());
        _super.prototype.visitImportDeclaration.call(this, node);
    };
    NoUseBeforeDeclareWalker.prototype.visitVariableDeclaration = function (node) {
        var variableName = node.name.text;
        var currentScope = this.getCurrentScope();
        if (currentScope[variableName] == null) {
            this.validateUsageForVariable(variableName, node.getStart());
        }
        currentScope[variableName] = true;
        _super.prototype.visitVariableDeclaration.call(this, node);
    };
    NoUseBeforeDeclareWalker.prototype.validateUsageForVariable = function (name, position) {
        var _this = this;
        var references = this.languageService.getReferencesAtPosition("file.ts", position);
        if (references) {
            references.forEach(function (reference) {
                var referencePosition = reference.textSpan.start();
                if (referencePosition < position) {
                    var failureString = Rule.FAILURE_STRING_PREFIX + name + Rule.FAILURE_STRING_POSTFIX;
                    var failure = _this.createFailure(referencePosition, name.length, failureString);
                    _this.addFailure(failure);
                }
            });
        }
    };
    return NoUseBeforeDeclareWalker;
})(Lint.ScopeAwareRuleWalker);
