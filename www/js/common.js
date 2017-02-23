//The build will inline common dependencies into this file.

requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery':                   'vendor/jquery',
    'bootstrap':                'vendor/bootstrap',
    'handlebars': 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.amd',
    'handlebars.runtime': 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.runtime.amd.min',
    'text' : 'vendor/text'
  },
  shim: {
    'bootstrap':                ['jquery']
  },
  packages: [
  	 {
      name: 'hbs',
      location: './',
      main: 'hbs'
    }
  ]
});
