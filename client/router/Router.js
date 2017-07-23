let PublicController = RouteController.extend({
    layoutTemplate: "Layout"
});

Router.route('/', {
    name: "Home",
    template: "Home",
    controller: PublicController
});

Router.route('/page1', {
    name: "Page_1",
    template: "Page1",
    controller: PublicController
});

Router.route('/organization', {
    name: "Organization",
    template: "Organization",
    controller: PublicController
});