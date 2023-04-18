---
quadrant: Tools
isNew: true
ring: Adopt
name: Tanstack Query (aka react-query)
---

[Tanstack-Query](https://tanstack.com/query/v3/docs/react/overview) is a library for caching the results of promises in a React frontend. It is mainly used for caching the results of fetch requests to the api, to mitigate duplicate requests, and to invalidate caches, simplifying the refetching that must occur after mutations to the api data occur. Historically, Synapse used [Redux](https://redux.js.org/) for a long time to manage sever cache on the client. Though most of the React community has moved on from raw Redux for managing this, tools like Redux Toolkit still exist for simplifying this usage of Redux.

Tanstack-Query is ergonomic to use as both a hook within a component, or as a function call if the fetch occurs within a promise chain. It encourages separation between queries and mutations (commands), which follows CQRS. It provides useful features for mocking the cache state for the purpose of testing, as well as disabling some of the cache features in order to make tests more deterministic. The community support for this library is very good, and it is well documented.
