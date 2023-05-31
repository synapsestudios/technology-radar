---
quadrant: Techniques
isNew: true
ring: Trial
name: Contract Testing with Typescript Types
---

Contract testing is a testing technique that guarantees that interfaces between systems are stable and safe. Good contract testing enables developers to change one system without worrying about breaking a system down stream. Contract testing with something like [Pact](https://pact.io/) is a pretty heavy lift for small teams. We've been using typescript types for the purpose of light weight contract testing with some success.

Sharing types across applications has become common pattern for teams that build apis and consume those apis from a SPA (like a react app). Sharing types means that developers don't have to redeclare types on their front end for backend api calls. If this is done naively, though, there are a number of serious risks involved. One of the big ones is that the front end code may become tightly coupled to implemenation details of the backend. If a react app depends on types then it will make it hard to change the backend without also having to change the react app.

Guidelines I’d put in place:

- The rule is that the backend is **discriminately** exporting types.
- Types that describe the REST interface are exportable.
- Types used internally by the backend for its own purposes are not exportable (domain types, etc).
- The client is only allowed to couple itself to the REST interface and is not allowed to couple itself to the backend’s implementation details
