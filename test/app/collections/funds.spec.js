
describe("OnePebbleApp.Collections.Funds", function () {
    before(function () {
        // Create a reference for all internal suites/specs.
        // Use internal method to clear out existing data.
        this.Funds = new OnePebbleApp.Collections.Funds();
    });
    after(function () {
        // Remove the reference.
        this.Funds = null;
    });
    describe("creation", function () {
        it("has default values", function () {
            expect(this.Funds).to.have.length(0);
        });
    });
});
