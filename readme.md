## build

```js
"scripts": {
    // separate bundle for deps used on every page
    "build": "npm run build-js-main && npm run build-js-deps",
    "build-js-main": "browserify browser/main.js > public/bundle.js -d",
    "build-js-deps": "browserify browser/deps.js > public/deps.js -d",
    "build-components": "vulcanize browser/elmts.html > public/vulcanized.html",
    "dev": "npm run start & npm run watch",
    "watch": "watchify browser/main.js -o public/bundle.js -dv & watchify browser/deps.js -o public/deps.js -dv",
    "start": "ecstatic -p 8000 public"
}
```
