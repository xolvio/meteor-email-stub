#xolvio:inbox-stub

Overrides Meteor's `Email.send` and collects emails into a collection.

###Installation

`meteor add xolvio:inbox-stub`


###usage

Run an integration / end-to-end test as you normally do, then you can access
the inbox collection from your test as a json object by hitting:

```javascript
Meteor.call('getEmailsFromInboxStub', function(e, emails) {
  console.log(emails);
});
```

Assuming two emails were sent, the code above would show:

```
[
 {
   _id: "ACZqWmLejePo9zQQD",
   from: "Xolv.io <no-reply@xolv.io>",
   to: "user@example.com"
   subject: "Please verify your email address",
   text: "Hello Someone,↵↵To verify your account email, simply click the link below.↵↵http://localhost:3000/#/verify-email/m_3n4CbgeESDGaugJ656RoqJRj5PlCjk0Cm43PU3aEN↵↵Thanks.↵"
 },
 {
   _id: "2aY6FkWRcbcr8RxL7",
   from: "Xolv.io <no-reply@xolv.io>",
   to: "user@example.com"
   subject: "Another email",
   text: "with different content"
 }
]
```

In your code, you can then do assertions like:

```javascript
  emails[0].subject.should.be('Please verify your email address');
```

This package is a `debugOnly` package and will only be used when developing
locally.
