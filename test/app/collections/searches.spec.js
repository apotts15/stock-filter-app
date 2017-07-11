
describe("OnePebbleApp.Collections.Searches", function () {
    before(function () {
        // Create a reference for all internal suites/specs.
        // Use internal method to clear out existing data.
        this.Searches = new OnePebbleApp.Collections.Searches();
    });
    after(function () {
        // Remove the reference.
        this.Searches = null;
    });
    describe("creation", function () {
        it("has default values", function () {
            expect(this.Searches).to.have.length(0);
        });
    });
});
