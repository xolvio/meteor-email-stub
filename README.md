#xolvio:email-stub

Overrides Email 

#Get the Book
To learn more about testing with Meteor, consider purchasing our book
[The Meteor Testing Manual](http://www.meteortesting.com/?utm_source=inbox-stub&utm_medium=banner&utm_campaign=inbox-stub).

[![](http://www.meteortesting.com/img/tmtm.gif)](http://www.meteortesting.com/?utm_source=inbox-stub&utm_medium=banner&utm_campaign=inbox-stub)

Your support helps us continue our work on Velocity and related frameworks.


###Installation

`meteor add xolvio:email-stub`


###Usage

Run through your app manually, or using integration / end-to-end tests and
emails that are sent from your app will be captured in a collection (\_emailsCollection)
whenever `Email.send` is used, such as accounts for verifying emails.


To see the sent emails from your console or to use them in tests as a json object
you run:

```javascript
Meteor.call('emailStub/getEmails', function(err, emails) {
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

Another use in testing is to extract the verification link as follows:

```javascript

  // grab the verification link
  var verificationLink = emails[0].text.match(/(http|https|www)\S+/)[0];

  // then use something like xolvio:webdriver to visit the URL like a user would
  browser.url(verificationLink)
```

This package is a `debugOnly` package and will only be used when developing
locally.
