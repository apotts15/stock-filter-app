
describe("StockFilterApp.Models.Search", function() {
    before(function () {
        this.Search = new StockFilterApp.Models.Search();
    });
    after(function () {
        this.Search = null;
    });

    it('should have the correct defaults', function() {
        var Search=this.Search;
        expect(Search.get('_id')).to.equal('');
    });

    it('should honor passed in attributes', function() {
        var newSearch = new StockFilterApp.Models.Search({
            '_id': 1
        });
        expect(newSearch.get('_id')).to.equal(1);
    })
});
