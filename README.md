# isolated-scroll

Prevent scroll events from bubbling up to parent elements — [View demo](https://markdalgleish.github.io/isolated-scroll).

```bash
$ npm install --save isolated-scroll
```

## Usage

```js
const isolatedScroll = require('isolated-scroll');

// Isolate scrolling of selected element:
const unbindHandlers = isolatedScroll(element);

// Remove isolated scroll behaviour:
unbindHandlers();
```

## Todo

- Add tests.

## License

[MIT](https://markdalgleish.mit-license.org/)
