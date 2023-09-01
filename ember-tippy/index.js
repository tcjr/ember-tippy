'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    '@embroider/macros': {
      setOwnConfig: {
        shouldIncludeTippyCoreCss: true,
      },
    },
  },
  included() {
    this._super.included.apply(this, arguments);
    this.options['@embroider/macros'].setOwnConfig.shouldIncludeTippyCoreCss = true;
  },
};
