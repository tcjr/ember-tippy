'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['ember-tippy'],
    },

    // https://github.com/ef4/ember-code-snippet
    snippetSearchPaths: ['app'],
    includeFileExtensionInSnippetNames: false,

    // https://github.com/shipshapecode/ember-prism
    'ember-prism': {
      theme: 'tomorrow',
      components: ['markup'],
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
