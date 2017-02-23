define(['handlebars.runtime'], function (Handlebars) {

//Error raise here. Handlebars is undefined.

    Handlebars = Handlebars["default"];

  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>Foobar!</h2>\n<p>\n"
    + container.escapeExpression(((helper = (helper = helpers.foo || (depth0 != null ? depth0.foo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"foo","hash":{},"data":data}) : helper)))
    + "\n</p>";
},"useData":true});

return templates;
    // var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    


    // return templates['content'] = template(function (Handlebars, depth0, helpers, partials, data) {

    //     this.compilerInfo = [4, '>= 1.0.0'];

    //     helpers = this.merge(helpers, Handlebars.helpers);
    //     data = data || {};
    //     return "<div>\r\n    Hello Handlebars and RequireJS\r\n</div>";
    // });
});