plugin-json
===========

[![CDNJS](https://img.shields.io/cdnjs/v/systemjs-plugin-json.svg)](https://cdnjs.com/libraries/systemjs-plugin-json)

JSON loader plugin



Configuration
-------------

To load all URLs with `.json` filename extension via this plugin:

```javascript
SystemJS.config({
  map: { 'plugin-json': 'plugin-json/json.js' },
  meta: { '*.json': { loader: 'plugin-json' } }
});
```




Testing this project
--------------------

```sh
npm test
```

browse to <http://localhost:3000/test> and open the browser's development console.
You should see the json object logged.
