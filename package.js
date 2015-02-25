Package.describe({
  name: 'xolvio:inbox-stub',
  version: '0.1.0',
  summary: 'Allows you to inspect sent emails and assert on their content.',
  git: 'https://github.com/xolvio/meteor-inbox-stub',
  documentation: null,
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.use(['email'], 'server');
  api.addFiles('inbox.js', 'server');
});
