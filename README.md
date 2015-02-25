#xolvio:inbox-stub

Overrides Meteor's `Email.send` and collects emails into a collection.

You can access the collection as a json object by hitting:

```javascript
Meteor.call('getEmailsFromInboxStub', function(e, emailsArray) {
  console.log(emailsArray);
});
```

The code above would show:

```
[{
  _id: "ACZqWmLejePo9zQQD",
  from: "Xolv.io <no-reply@xolv.io>",
  to: "user@example.com"
  subject: "Please verify your email address",
  text: "Hello Someone,↵↵To verify your account email, simply click the link below.↵↵http://localhost:3000/#/verify-email/m_3n4CbgeESDGaugJ656RoqJRj5PlCjk0Cm43PU3aEN↵↵Thanks.↵"
}]
```

This package is a `debugOnly` package and will only be used when developing
locally.