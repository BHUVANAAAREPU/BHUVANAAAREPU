
Filter changed files
 37 changes: 37 additions & 0 deletions37  
.eslintrc
@@ -0,0 +1,37 @@
{
  "env": {
      "browser": false,
      "commonjs": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "react/jsx-indent": [
        "error",
        2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "warn",
          "always"
      ],
      "no-console": 0
  }
}
 1 change: 1 addition & 0 deletions1  
.gitignore
@@ -0,0 +1 @@
node_modules
 21 changes: 21 additions & 0 deletions21  
LICENCE
@@ -0,0 +1,21 @@
MIT License

Copyright (c) 2017 bhuvana aarepu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 8,869 changes: 8,869 additions & 0 deletions8,869  
package-lock.json
Large diffs are not rendered by default.

 44 changes: 44 additions & 0 deletions44  
package.json
@@ -0,0 +1,44 @@
{
  "name": "weather-forecast",
  "version": "1.0.0",
  "description": "webpack init",
  "watch": true,
  "dependencies": {
    "react": "^16.1.1",
    "react-dom": "^16.1.1",
    "react-redux": "^5.0.6",
    "redux": "^3.7.2",
    "webpack": "^3.8.1"
  },
  "devDependencies": {
    "axios": "^0.17.1",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^0.28.4",
    "eslint": "^4.15.0",
    "eslint-loader": "^1.9.0",
    "eslint-plugin-react": "^7.5.1",
    "extract-text-webpack-plugin": "2.1.2",
    "file-loader": "^0.11.2",
    "lodash": "^4.17.4",
    "node-sass": "^4.5.3",
    "pre-commit": "^1.2.2",
    "redux-logger": "^3.0.6",
    "redux-promise-middleware": "^5.0.0",
    "redux-thunk": "^2.2.0",
    "sass-loader": "^6.0.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "webpack-dev-server": "^2.7.1"
  },
  "scripts": {
    "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --port 8080",
    "lint": "./node_modules/.bin/eslint ./src"
  },
  "author": "Santhosh Sundar",
  "license": "MIT"
}
 108 changes: 108 additions & 0 deletions108  
public/dist/bundle.css
@@ -0,0 +1,108 @@
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

body {
  line-height: 1; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

hr {
  border: 2px solid #666; }

body {
  background: #3f51b5;
  color: #fff;
  font-family: 'Roboto', sans-serif; }

.weather-forecast-wrapper {
  margin: 0 auto;
  width: 40%; }
  @media only screen and (max-width: 64em) {
    .weather-forecast-wrapper {
      width: 60%; } }
  @media only screen and (max-width: 48em) {
    .weather-forecast-wrapper {
      width: 100%; } }
  .weather-forecast-wrapper header {
    text-align: center;
    padding: 20px 0; }
    .weather-forecast-wrapper header .heading {
      font-size: 25px;
      padding: 30px 0 0 0;
      text-transform: uppercase; }
    .weather-forecast-wrapper header .city-name {
      font-size: 20px;
      padding: 10px;
      text-transform: capitalize; }
  .weather-forecast-wrapper .forecast-tiles {
    width: 100%; }
    .weather-forecast-wrapper .forecast-tiles .forecast-tile {
      height: 100px;
      background: #303f9f;
      margin: 3px;
      display: flex; }
      .weather-forecast-wrapper .forecast-tiles .forecast-tile .icon {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #283593;
        flex-direction: column;
        text-transform: uppercase;
        font-size: 12px; }
      .weather-forecast-wrapper .forecast-tiles .forecast-tile .weather-info {
        padding: 0 0 0 15px;
        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: center; }
        .weather-forecast-wrapper .forecast-tiles .forecast-tile .weather-info .min-max {
          padding: 10px 10px;
          font-size: 20px;
          color: #c7cef5; }
          .weather-forecast-wrapper .forecast-tiles .forecast-tile .weather-info .min-max strong {
            font-weight: bold;
            color: #fff; }
        .weather-forecast-wrapper .forecast-tiles .forecast-tile .weather-info .more-info {
          padding: 0 10px;
          font-size: 12px; }
 28 changes: 28 additions & 0 deletions28  
public/dist/bundle.js
Large diffs are not rendered by default.

 15 changes: 15 additions & 0 deletions15  
public/index.html
@@ -0,0 +1,15 @@
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="dist/bundle.css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <title>5-Days Weather Forecast</title>
</head>
<body>
  <div id="root"></div>
  <script src="dist/bundle.js"></script>
</body>
</html>
 33 changes: 33 additions & 0 deletions33  
src/App.js
@@ -0,0 +1,33 @@
import React, { Component } from "react";

import { connect } from "react-redux";
import { getData } from "./actions/weatherStation";

import WeatherForecast from './components/WeatherForecast';

@connect((store) => {  
  return {
    forecast: store.weatherStation.data
  }
})

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {
    const { forecast } = this.props; 

    return (
      forecast === null ? (
        <div className="loading">Loading...</div>
      ) : (
        <WeatherForecast data={forecast} />
      )
    );
  }
}

export default App;
