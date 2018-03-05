
describe("StockFilterApp.Views.Fund template rendering", function() {
    it('render by remote data', function (done) {
        var Funds = new FundsCollection();
        Funds.create({
            '_id': 1
        });
        var view = new StockFilterApp.Views.Fund(Funds);
        view.once('render', function () {
            expect(view.$el.html()).to.have.string('Your content here.');
            done();
        });
        view.render();
    });
});
