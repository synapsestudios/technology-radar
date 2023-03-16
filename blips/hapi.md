---
quadrant: Languages and Frameworks
isNew: true
ring: Hold
name: hapi
---

Synapse has used hapi for close to a decade. We originally adopted hapi for its strong culture, lightweight api, and security features. One important aspect of hapi has always been that it has no external dependencies at all. Hapi is and has always been completely isolated from [supply chain](https://circleci.com/blog/secure-software-supply-chain/?utm_source=google&utm_medium=sem&utm_campaign=sem-google-dg--uscan-en-dsa-tROAS-auth-nb&utm_term=g_-_c__dsa_&utm_content=&gclid=CjwKCAjw_MqgBhAGEiwAnYOAemTlrPWDKv0v_kNRMIPVVLv6SDF925rd87LlZA6FXutlSeTpajtu-RoCca0QAvD_BwE) security issues.

However, we have moved the hapi blip into our "Hold" ring for two reasons. One is that as of a couple of years ago we've rapidly adopted typescript. Working with hapi in typescript has been painful and we started to prefer typescript native frameworks. Our architectural preferences have also grown somewhat in that timeframe and we have grown to prefer a stronger modularization paradigm than hapi's plugins. We have especially fallen out of love with the convention in the hapi community to mutate the server object in order to pass around plugins and other dependencies. Hapi will probably always have a place at Synapse, but we are no longer starting new work with this framework.
