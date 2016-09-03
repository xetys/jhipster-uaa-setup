var Twig = Twig || require("../twig"),
    twig = twig || Twig.twig;

describe("Twig.js Async ->", function() {

    describe("simple template ->", function() {
        var foo = false;

        it("should call the callback for simple templates", function(done) {
            var test_template = twig({data: 'test'});
            test_template.render({}, function(result) {
              result.should.equal("test");
              done();
            });

        });
    });
});
