---
quadrant: Languages and Frameworks
isNew: true
ring: Hold
name: Bookshelf.js
---

Synapse used [Bookshelf.js](https://bookshelfjs.org/) for the better part of a decade, beginning with our earliest projects after changing our preferred backend environment from PHP to Node.js. The things that we liked about it were that it used the [knex](https://knexjs.org/) query builder, which was well known for its ease-of-use and multi-database support, and that it was a lightweight ORM that reduced the amount of boilerplate code we'd need for CRUD operations. 

However, we have moved the bookshelf blip into our "Hold" ring for a few reasons. As our approach to building web applications has evolved, we have adopted a Domain Driven Design (DDD) architecture with a repository pattern, emphasizing the separation of concerns between the domain model and the persistence layer. Bookshelf.js primarily uses the active record pattern and is tightly coupled with the database schema, which makes it incompatible with our approach without a lot of extra code wrapping it. Another reason is we found that even with all the methods provided by bookshelf, we were writing a lot of custom code to handle the many-to-many relationships that are common in our applications, and the ORM lacked some things we commonly needed, like an official way to handle pagination (though community-created plugins were helpful). Finally, the bookshelf repository has fallen out of active development, and the community has moved on to other ORMs like [Objection.js](https://vincit.github.io/objection.js/). 