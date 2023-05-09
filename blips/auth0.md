---
quadrant: Platforms
isNew: true
ring: Adopt
name: Auth0 IDP
---

Auth0 is a managed identity platform that serves as an alternative to the Synapse OIDC Provider as well as AWS Cognito and other similar services. Auth0 has a generous free plan and relatively low pricing for applications that don't have hundreds of thousands of monthly active users. It also has a React Native SDK that makes it straightforward to integrate into our React Native apps, and a well-documented administrative API.

We have used Auth0 on a number of projects in production and have found it to be a good fit for our use cases. It has a number of benefits over other tools like Cognito:

- Ability to migrate users with password hashes from other OIDC providers or from other Auth0 tenants.
- Ability to invite users with a "Set Password" link, which is a common use case for us.
- Ability to customize the default screens and emails for login, signup, and password reset workflows.
- Very good React Native library with hooks support.
- Very good admin UI that makes it easy for non-developers to do administrative tasks.
- Very good documentation and support.
- Social SSO support for providers like Google, Apple, and Facebook
- HIPAA compliance
- MFA
- Passwordless login