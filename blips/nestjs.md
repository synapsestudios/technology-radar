---
quadrant: Languages and Frameworks
isNew: true
ring: Adopt
name: NestJS
---

Most of the work Synapse does can most responsibly be done with the [modular monolith](https://www.youtube.com/watch?v=5OjqD-ow8GE) architecture pattern, and we have been using [NestJS](https://nestjs.com/) to build these monoliths. Nest is a fairly heavy weight framework, which makes it an unusual choice for Synapse, but it has a very good module system, it's very popular, and it's well designed.

Because it has a bigger footprint than the frameworks we've historically used it will be important to stricly define the boundaries between the parts of our code that are allowed to know about the framework, and the parts that aren't.
