'use strict';

const { addonV1Shim } = require('@embroider/addon-shim');

module.exports = {
  ...addonV1Shim(__dirname),

  // According to the discussion here:
  // https://github.com/embroider-build/embroider/pull/1588#issuecomment-1703904025
  // Setting configuration here will not work in non-broccoli build systems.
  // However, the build hooks for non-broccoli build systems are not yet
  // implemented. So, we are setting the configuration here for now since it
  // will work with the only build system that currently exists.
  options: {
    '@embroider/macros': {
      setOwnConfig: {
        shouldIncludeTippyCoreCss: true,
      },
    },
  },
};
