#xolvio:email-stub

Stores emails so that they can be referenced by test suite.

#Get the Book
To learn more about testing with Meteor, consider purchasing our book [The Meteor Testing Manual](http://www.meteortesting.com/?utm_source=inbox-stub&utm_medium=banner&utm_campaign=inbox-stub).

###Installation

`meteor add xolvio:email-stub`


###Usage

Run a through your app manually, or using integration / end-to-end tests and
emails that are sent from your app will be captured wherever `Email.send` is
used, such as accounts for verifying emails.

You have 2 options to set up the stub:
1. use `emailStub/stub` to create a "pure stub", meaning that Meteor will NOT
send out any emails
2. use `emailStub/stubAndPassThrough` to create a "passThrough-stub", meaning
that meteor WILL still send out emails via `Email.send`. This enables you to
preview your emails during development using tools like
[MailDev ](https://github.com/djfarrelly/MailDev)

####Set up "pure stub"
```javascript
Meteor.call('emailStub/stub');

// or running with Chimp
server.call('emailStub/stub');
```

####Set up "passThrough-stub" (and still have meteor send emails via `Email.send`)
```javascript
Meteor.call('emailStub/stubAndPassThrough');

// or running with Chimp
server.call('emailStub/stubAndPassThrough');
```

####Retrieve emails
```javascript
Meteor.call('emailStub/getEmails', function(e, emails) {
  console.log(emails);
});

// or running with Chimp
let emails = server.call('emailStub/getEmails');
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

Another use for testing is to extract the verification link like this:

```javascript

  // grab the verification link
  var verificationLink = emails[0].text.match(/(http|https|www)\S+/)[0];

  // then use something like xolvio:webdriver to visit the URL like a user would
  browser.url(verificationLink)
```

This package is a `debugOnly` package and will only be used when developing
locally.

### Testing lifecycle
Set up
```javascript
Meteor.call('emailStub/stub');  // OR 'emailStub/stubAndPassThrough'
```

Reset collection
```javascript
Meteor.call('emailStub/reset');
```

Restore and remove stub
```javascript
Meteor.call('emailStub/restore');
```
