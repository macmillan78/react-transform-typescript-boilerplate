# React Transform Typescript Boilerplate

Enables React development with Typescript featuring Hot Module Replacement and CSS modules.

Based on [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

Integrates following technologies:

* [**Webpack**](https://github.com/webpack/webpack)
* [**Typescript**](http://www.typescriptlang.org/)
* [**React**](https://facebook.github.io/react/)
* [**Sass**](http://sass-lang.com/) - (To replace extension in line 32 and sass-loader in line 33 of webpack.config.*.js)
* [**CSS Modules**](https://github.com/css-modules/css-modules)

**To import Sass files in JS use the require function instead of ES2015 import syntax, due to conflicts with typescripts module checking.**

* [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr) - enables hot reloading react components
* [**react-transform-catch-errors**](https://github.com/gaearon/react-transform-catch-errors) - catches errors inside `render()`

For convenience they are packed in a single preset called [**react-transform-hmre**](https://github.com/danmartinez101/babel-preset-react-hmre) but you can make your own.

Syntax errors are displayed in an overlay using **[@glenjamin](https://github.com/glenjamin)**’s **[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)**, which replaces Webpack Dev Server. This project **[does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.

## Installation

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

Proxying another project:

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start -- --proxyTarget http://yourdomain.tld
open http://localhost:3000
```

and integrate script reference to http://localhost:3000/static/bundle.js in the proxied project in dev mode.

## Discussion

You can discuss React Transform and related projects in **#react-transform** channel on [Reactiflux Discord](http://reactiflux.com).

## License

CC0 (public domain)
