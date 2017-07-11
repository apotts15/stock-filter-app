
describe("OnePebbleApp.Models.Fund", function() {
    before(function () {
        this.Fund = new OnePebbleApp.Models.Fund();
    });
    after(function () {
        this.Fund = null;
    });

    it('should have the correct defaults', function() {
        var Fund=this.Fund;
        expect(Fund.get('_id')).to.equal('');
    });

    it('should honor passed in attributes', function() {
        var newFund = new OnePebbleApp.Models.Fund({
            '_id': 1
        });
        expect(newFund.get('_id')).to.equal(1);
    })
});
