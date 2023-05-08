---
quadrant: Platforms
isNew: true
ring: Hold
name: AWS Cognito OIDC IDP
---

Cognito is a managed identity platform by AWS that supports OIDC authentication workflows, as well as many other use cases. This blip is specifically about Cognito as an OIDC IDP, and not other use cases, such as granting users access to AWS resources from our frontends (e.g. to upload files directly to S3 without streaming through our backend).

The primary benefit of Cognito is that it's available by default to us in AWS, which means our clients typically will not need to register and pay for a separate identity provider. It's fully-managed, so we don't have to worry about configuring infrastructure or patching security issues. It also has a React Native SDK via AWS Amplify, which makes it straightforward to integrate into our React Native apps, and a well-documented administrative API.

However, after using it on a project in production, we found a number of drawbacks that make other alternatives like Auth0 more attractive:

- The admin API doesn't have the same level of functionality as our Synapse OIDC Provider or Auth0. For example, there's no way to invite a user with an email containing a "Set Password" link, which is a common use case for us. By default, it sends an email to the user with a plaintext password. There's not even a way to generate a "set password" token programatically and send it to the user via our own email service. Additionally, these passwords expire, and once they do, there's no way to reset them without invoking the admin API from our backend.
- The admin UI is not very user-friendly and is buried in the AWS console, which makes it more difficult for non-developers to do any administrative tasks.
- There is no way to migrate users to a Cognito user pool with passwords already set. This means that if we want to migrate users from another OIDC provider or from another Cognito user pool, we have to ask them to reset their passwords or orchestrate a complex transparent migration.
- Some user pool changes require creating a new user pool and migrating users to it. For example, user pools default to using case-sensitive emails, which is undesirable for our use cases especially when using an invitation workflow (the person inviting the user may not type their email with the same capitalization that the user does). Changing this requires creating a new user pool and migrating users to it.
- The React Native SDK is not very flexible. The customization options for the default screens are very limited, so we ended up using `aws-amplify` and `amazon-cognito-identity-js` packages to orchestrate the IDP workflows in our mobile app with our own custom React components. This took a significant amount of development effort and adds complexity to the codebase.

Overall, the developer effort required to get Cognito to parity with other tools like Auth0 for our use cases just isn't going to be worth it. We will continue to use Cognito for other use cases, such as granting users access to AWS resources from our frontends, but we will not use it as an OIDC IDP.