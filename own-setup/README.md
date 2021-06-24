## What is needed?

- Babel: nextGen JS => ES6
- JSX
- CSS processor, autoprefixer
- File loader for images
- Optimization
- HTML injection
- Live Server

## Dependencies

- **Webpack**
  - Webpack Dev Server
  - Webpack
- **JS**
  - Babel
    - _@babel/core_ & _@babel/preset-env_ & _@babel/preset-react_ & _@babel/preset-stage-2_ & _babel-loader_ &
      _@babel/plugin-proposal-class-properties_
    - **.babelrc** => configuration for babel loader. presets, plugins, etc.
  - uglify
- **css**
  - css-loader, options for module
  - postcss-loadert -> enable autoprefix,
  - style-loader
- **images**
  - url-loader?config...

## Steps

1. index.html to be public
2. Create a demo of CRA's folder structure
3. Start Webpack config
   - add entry, output, mode, devtool, module with rules array
   - **rule** => { test: regex, loader: [], exclude: regex }
