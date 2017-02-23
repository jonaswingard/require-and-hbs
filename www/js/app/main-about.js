require([
  'jquery',
  'app/models/aboutModel',
  'grunt2-template',
  'bootstrap'
],

function ($, model, template) {
  'use strict';

  $(function() {
    console.log(template.template({foo: 'godnatt!'}));

    // Set the title for our module with the data
    // from our model
    $('h1').html(model.getTitle());

    // Set the width of our progress bar with
    // data from our model.
    var percent = model.getPercentComplete();
    $('.progress-bar')
      .css({ 'width': percent })
      .attr('aria-valuenow', percent.substr(0, percent.length - 1));

    // Activate the bootstrap popover plugin
    $('[rel=popover]').popover({ trigger: 'hover' });
  });
});