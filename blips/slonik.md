---
quadrant: Tools
isNew: true
ring: Trial
name: Slonik
---

Slonik is a Node.js Postgres client with TypeScript support which promotes writing raw SQL. It generates SQL-injection-safe queries using ES6 template tags and has various convenience methods and hooks into features (e.g. type parsers, which lets us override how Postgres types are converted to JavaScript and vice-versa).

Using raw SQL has several benefits when used responsibly with good architectural practices, such as the Repository pattern. It makes it easy to track down problematic queries in the code when using tools such as the slow query log. It also allows engineers to easily prototype queries in a SQL client and then implement them by pasting a query into the codebase, or to debug problematic queries in the codebase by pasting them into a SQL client. This means engineers don't have to remember how to convert a query between SQL and their query builder library's interfaces.

It also helps ensure (when paired with linter rules and code review practices) that no database access happens outside of repositories, and generally promotes good SQL knowledge among the team. It gives engineers more flexibility in the queries that are used, so they can be optimized for performance or to use special features or data structures of the database that aren't always exposed by query builders or ORMs.

The downsides to using Slonik include:
- Community: the community support (Q&As, examples, companion tools/plugins) is very small compared to popular ORMs and query builders.
- Stability: they have introduced major breaking changes/redesigns to their public interface repeatedly in the last several years. This has contributed to the stagnation of the community mentioned above.
- Lack of migration tool: there was a third party tool called `slonik-migrator` to facilitate migrations using Slonik, but unfortunately it has not been updated to support the last several major Slonik versions and now needs a major refactor.
- Types: Slonik isn't aware of the database schema in the same way as ORMs like Prisma, so you have to create your own Result types, which may allow bugs to slip through if your types don't match the schema.

Overall, if Slonik can stabilize their API and improve their community support, it will likely be an easy win for us.
