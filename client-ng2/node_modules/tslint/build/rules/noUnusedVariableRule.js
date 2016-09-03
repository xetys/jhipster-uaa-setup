var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OPTION_CHECK_PARAMETERS = "check-parameters";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        var documentRegistry = ts.createDocumentRegistry();
        var languageServiceHost = Lint.createLanguageServiceHost("file.ts", sourceFile.getFullText());
        var languageService = ts.createLanguageService(languageServiceHost, documentRegistry);
        return this.applyWithWalker(new NoUnusedVariablesWalker(sourceFile, this.getOptions(), languageService));
    };
    Rule.FAILURE_STRING = "unused variable: ";
    return Rule;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
var NoUnusedVariablesWalker = (function (_super) {
    __extends(NoUnusedVariablesWalker, _super);
    function NoUnusedVariablesWalker(sourceFile, options, languageService) {
        _super.call(this, sourceFile, options);
        this.skipVariableDeclaration = false;
        this.skipParameterDeclaration = false;
        this.languageService = languageService;
    }
    NoUnusedVariablesWalker.prototype.visitImportDeclaration = function (node) {
        if (!this.hasModifier(node.modifiers, 76 /* ExportKeyword */)) {
            this.validateReferencesForVariable(node.name.text, node.name.getStart());
        }
        _super.prototype.visitImportDeclaration.call(this, node);
    };
    NoUnusedVariablesWalker.prototype.visitVariableDeclaration = function (node) {
        var propertyName = node.name, variableName = propertyName.text;
        if (!this.skipVariableDeclaration) {
            this.validateReferencesForVariable(variableName, propertyName.getStart());
        }
        _super.prototype.visitVariableDeclaration.call(this, node);
    };
    NoUnusedVariablesWalker.prototype.visitInterfaceDeclaration = function (node) {
        this.skipParameterDeclaration = true;
        _super.prototype.visitInterfaceDeclaration.call(this, node);
        this.skipParameterDeclaration = false;
    };
    NoUnusedVariablesWalker.prototype.visitIndexSignatureDeclaration = function (node) {
        this.skipParameterDeclaration = true;
        _super.prototype.visitIndexSignatureDeclaration.call(this, node);
        this.skipParameterDeclaration = false;
    };
    NoUnusedVariablesWalker.prototype.visitVariableStatement = function (node) {
        if (this.hasModifier(node.modifiers, 76 /* ExportKeyword */)) {
            this.skipVariableDeclaration = true;
        }
        _super.prototype.visitVariableStatement.call(this, node);
        this.skipVariableDeclaration = false;
    };
    NoUnusedVariablesWalker.prototype.visitFunctionDeclaration = function (node) {
        var variableName = node.name.text;
        if (!this.hasModifier(node.modifiers, 76 /* ExportKeyword */)) {
            this.validateReferencesForVariable(variableName, node.name.getStart());
        }
        _super.prototype.visitFunctionDeclaration.call(this, node);
    };
    NoUnusedVariablesWalker.prototype.visitParameterDeclaration = function (node) {
        var variableName = node.name.text;
        if (!this.hasModifier(node.modifiers, 106 /* PublicKeyword */) && !this.skipParameterDeclaration && this.hasOption(OPTION_CHECK_PARAMETERS)) {
            this.validateReferencesForVariable(variableName, node.name.getStart());
        }
        _super.prototype.visitParameterDeclaration.call(this, node);
    };
    NoUnusedVariablesWalker.prototype.visitPropertyDeclaration = function (node) {
        if (node.name != null && node.name.kind === 63 /* Identifier */) {
            var modifiers = node.modifiers;
            var variableName = node.name.text;
            if (this.hasModifier(modifiers, 104 /* PrivateKeyword */)) {
                this.validateReferencesForVariable(variableName, node.name.getStart());
            }
        }
        _super.prototype.visitPropertyDeclaration.call(this, node);
    };
    NoUnusedVariablesWalker.prototype.visitMethodDeclaration = function (node) {
        if (node.name != null && node.name.kind === 63 /* Identifier */) {
            var modifiers = node.modifiers;
            var variableName = node.name.text;
            if (this.hasModifier(modifiers, 104 /* PrivateKeyword */)) {
                this.validateReferencesForVariable(variableName, node.name.getStart());
            }
        }
        _super.prototype.visitMethodDeclaration.call(this, node);
    };
    NoUnusedVariablesWalker.prototype.hasModifier = function (modifiers, modifierKind) {
        if (modifiers == null) {
            return false;
        }
        for (var i = 0, n = modifiers.length; i < n; i++) {
            var modifier = modifiers[i];
            if (modifier.kind === modifierKind) {
                return true;
            }
        }
        return false;
    };
    NoUnusedVariablesWalker.prototype.validateReferencesForVariable = function (name, position) {
        var references = this.languageService.getReferencesAtPosition("file.ts", position);
        if (references.length <= 1) {
            var failureString = Rule.FAILURE_STRING + "'" + name + "'";
            var failure = this.createFailure(position, name.length, failureString);
            this.addFailure(failure);
        }
    };
    return NoUnusedVariablesWalker;
})(Lint.RuleWalker);
