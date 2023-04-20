---
quadrant: Tools
isNew: true
ring: Trial
name: Prisma
---

Prisma is a Node.js library that provides a type-safe database access layer with a modern API. Prisma supports multiple databases such as PostgreSQL, MySQL, and SQLite, and it provides a database schema designer tool that generates a type-safe client library from the schema.

Prisma's main advantages are:

- Type-safety: Prisma's client library is generated from the database schema, so it provides type-safety and auto-completion for queries automatically. This helps to catch errors early and provides better IDE support, and doesn't run the risk of manually-generated result types not matching the database schema.
- Performance: Prisma provides query profiling and optimization tools to help optimize the database queries.
- Migration tool: Prisma provides a migration tool that helps manage database schema changes in a version-controlled way. The migration tool generates migration files that can be reviewed and applied manually or automatically.
- Community: Prisma has a large and active community with many examples, plugins, and integrations with other popular tools and frameworks such as Apollo GraphQL, Next.js, and Nest.js.

There are some potential drawbacks to using Prisma, including:

- Learning curve: Prisma has its own syntax and concepts that may take some time to learn and adapt to. For example, Prisma's query builder syntax is different from SQL or other ORMs, and it has its own data modeling language.
- Limited control: Prisma's API is optimized for typical use cases, but it may not cover all edge cases or advanced features of the database. In some cases, developers may need to use raw SQL which is a little bit kludgy in Prisma.
- Difficult to debug: When things _do_ go wrong with Prisma, especially with the schema or migration tools, it can be difficult to tell where the problem lies since the error messages and stack traces aren't always helpful.

We're trialing this primarily because the developer experience is so good in terms of TypeScript usage and community support. It should still be used responsibly and isolated to the infrastructure layers of the codebase by using patterns such as the Repository pattern.
