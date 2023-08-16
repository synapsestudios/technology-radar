---
quadrant: Tools
isNew: true
ring: Adopt
name: React Native CLI
---

React Native CLI tools are a set of command-line utilities designed to facilitate the development, building, and deployment of mobile applications using the React Native framework.

Synapse has used the React Native CLI tools to take a number of projects to production. It's customizable and flexible enough to be used on basically any project, but it does have some big caveats:

- Upgrading versions of RN, and all of the regular Android/iOS-specific things can be painful, sometimes requiring multiple days of debugging.
- Running RN apps in development requires XCode and/or Android Studio to be installed and configured, which has been a regular source of problems for developers trying to run the simulators. Also in the past, we've seen updates to XCode that break the build for days while waiting for a patch. 

When starting a new RN project from scratch, you should strongly consider using Expo instead of the React Native CLI tools, but if you find that Expo would not be a good fit for your project, the React Native CLI tools are a good alternative.