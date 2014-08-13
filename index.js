module.exports = function (app, cfg) {
  if ( ! app.locals.config ) {
    app.locals.config = {};
  }

  if ( typeof cfg === 'object' && cfg.constructor === Object ) {
    for ( var i in cfg ) {
      app.locals.config[i] = cfg[i];
    }
  }
};