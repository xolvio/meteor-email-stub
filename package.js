Package.describe({
  name: 'xolvio:email-stub',
  version: '0.3.0',
  summary: 'Allows you to inspect sent emails and assert on their content.',
  git: 'https://github.com/xolvio/meteor-email-stub',
  documentation: null,
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.use(['email'], 'server');
  api.addFiles('email.js', 'server');
});
