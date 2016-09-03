var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Formatter = (function (_super) {
    __extends(Formatter, _super);
    function Formatter() {
        _super.apply(this, arguments);
    }
    Formatter.prototype.format = function (failures) {
        var output = "<pmd version=\"tslint\">";
        failures.forEach(function (failure) {
            var failureString = failure.getFailure().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;");
            var lineAndCharacter = failure.getStartPosition().getLineAndCharacter();
            output += "<file name=\"" + failure.getFileName();
            output += "\"><violation begincolumn=\"" + lineAndCharacter.character;
            output += "\" beginline=\"" + lineAndCharacter.line;
            output += "\" priority=\"1\"";
            output += " rule=\"" + failureString + "\"> </violation></file>";
        });
        output += "</pmd>";
        return output;
    };
    return Formatter;
})(Lint.Formatters.AbstractFormatter);
exports.Formatter = Formatter;
