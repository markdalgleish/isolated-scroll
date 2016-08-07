# isolated-scroll

Prevent scroll events from bubbling up to parent elements.

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

- Add demo.
- Add tests.

## License

[MIT](https://markdalgleish.mit-license.org/)
