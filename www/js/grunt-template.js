define(['handlebars.runtime'], function (Handlebars) {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['foobar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>i am fooing the bar</h2>";
},"useData":true});

templates['template'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>Foobar!</h2>\n<p>\n"
    + container.escapeExpression(((helper = (helper = helpers.foo || (depth0 != null ? depth0.foo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"foo","hash":{},"data":data}) : helper)))
    + "\n</p>";
},"useData":true});
return templates;
});