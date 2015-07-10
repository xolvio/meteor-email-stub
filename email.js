(function () {

  'use strict';

  var _emailsCollection = new Package.mongo.Mongo.Collection('emailsCollection');

  Meteor.methods({

    'emailStub/stub': function () {
      Email.__send = Email.send;
      Email.send = function (options) {
        _emailsCollection.insert(options);
      };
    },

    'emailStub/restore': function () {
      Email.send = Email.__send;
    },

    'emailStub/reset': function () {
      _emailsCollection.remove({});
    },

    'emailStub/getEmails': function () {
      return _emailsCollection.find().fetch();
    }

  });

})();