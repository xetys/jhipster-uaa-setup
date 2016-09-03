var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BanRule = require("./banRule");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        var options = this.getOptions();
        var consoleBanWalker = new BanRule.BanFunctionWalker(sourceFile, this.getOptions());
        options.ruleArguments.forEach(function (option) {
            consoleBanWalker.addBannedFunction(["console", option]);
        });
        return this.applyWithWalker(consoleBanWalker);
    };
    return Rule;
})(BanRule.Rule);
exports.Rule = Rule;
