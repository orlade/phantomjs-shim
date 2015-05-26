Package.describe({
  name: 'phantomjs-shim',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds shims for core functions missing from PhantomJS 1.x for use in Meteor apps.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('phantomjs-shim.js');
});

Package.onTest(function(api) {
  api.use('phantomjs-shim');
});
