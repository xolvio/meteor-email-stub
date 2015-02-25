(function () {

  'use strict';

  if (Meteor.isClient) {
    return;
  }

  var _fakeInboxCollection =
    new Package.mongo.Mongo.Collection('FakeInboxEmails');

  Meteor.startup(function () {
    _resetInbox();
    _initFakeInbox();
  });

  Meteor.methods({
    'resetInbox': _resetInbox,
    'getEmailsFromInboxStub': function () {
      return _fakeInboxCollection.find().fetch();
    }
  });

  function _initFakeInbox() {
    _fakeInboxCollection.remove({});
    Email.send = function (options) {
      _fakeInboxCollection.insert(options);
    };
  }

  function _resetInbox() {
    _fakeInboxCollection.remove({});
  }

})();