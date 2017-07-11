
describe("OnePebbleApp.Views.Search template rendering", function() {
    it('render by remote data', function (done) {
        var Searches = new SearchesCollection();
        Searches.create({
            '_id': 1
        });
        var view = new OnePebbleApp.Views.Search(Searches);
        view.once('render', function () {
            expect(view.$el.html()).to.have.string('Your content here.');
            done();
        });
        view.render();
    });
});
