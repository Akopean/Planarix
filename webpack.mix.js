
let mix = require('laravel-mix');


mix.webpackConfig({
  node: {
    fs: 'empty' //https://github.com/webpack-contrib/css-loader/issues/447 issue
  }
});

mix.setPublicPath('./');

mix.options({
  processCssUrls: false,
  fs : 'empty'
});

  
mix.js('src/js/app.js', './js')
   .sass('src/scss/spa-app.scss', './css')
    .sass('src/scss/app.scss', './css')
    .copy('src/images', './images');