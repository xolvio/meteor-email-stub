(function () {

  'use strict';

  const _emailsCollection = new Package.mongo.Mongo.Collection('emailsCollection');
  const originalFunction = Email.send

  Meteor.methods({
    'emailStub/stub': function () {
      originalFunction = Email.send;
      Email.send = function (options) {
        _emailsCollection.insert(options);
      };
    },

    /**
     * create stub and pass through the call to the original function.
     * NOTE: read about monkey-patching best-practises at https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
     */
    'emailStub/stubAndPassThrough': function () {
      Email.send = function (options) {
        _emailsCollection.insert(options);
        originalFunction.apply(this, [options]);  // pass through
      }
    },

    'emailStub/restore': function () {
      Email.send = originalFunction;
    },

    'emailStub/reset': function () {
      _emailsCollection.remove({});
    },

    'emailStub/getEmails': function () {
      return _emailsCollection.find().fetch();
    }

  });

})();
