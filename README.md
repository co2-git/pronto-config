prontoplugin-config
===================

Expose a JSON object in `app.locals.config`

# Install

    pronto plugins install config
    
# Usage

```js
// In pronto

pronto()
	.plugin('pronto-config', { foo: 'bar' })
	.on('all').then(function (req, res) {
		res.send(app.locals.foo);
	});

// In Express

var prontoConfig = require('pronto-config');
var app = express();
prontoConfig(app, { foo: 'bar' });

app.use(function(req, res) {
	res.send(app.locals.foo);
});
```
