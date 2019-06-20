# uuid

This is a mirror of [uuid](https://www.npmjs.com/package/uuid), bundled and exposed as ES module

[uuid](https://www.npmjs.com/package/uuid) is a javascript library for generation of [RFC4122](http://www.ietf.org/rfc/rfc4122.txt) UUIDS.

This mirror has been created because [uuid](https://www.npmjs.com/package/uuid) uses CommonJS. _Support for es modules has been requested [here (#245)](https://github.com/kelektiv/node-uuid/issues/245)_

## Usage

### Installing

```bash
npm install @bundled-es-modules/uuid
```

### Importing

```js
  //standalone modules
  import uuidv1 from "@bundled-es-modules/uuid/v1.js";
  import uuidv3 from "@bundled-es-modules/uuid/v3.js";
  import uuidv4 from "@bundled-es-modules/uuid/v4.js";
  import uuidv5 from "@bundled-es-modules/uuid/v5.js";

  //bundled index
  import { uuidv1, uuidv3, uuidv4, uuidv5 } from "@bundled-es-modules/uuid/index.js";
```

If using multiple uuid implementations, import from the index bundle. The index bundle may contain code shared by multiple implementations. Otherwise, standalone bundles are fine.

### Generating uuids

Then generate your uuid version of choice ...

Version 1 (timestamp):

```javascript
uuidv1(); // ⇨ '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
```

Version 3 (namespace):

```javascript
// ... using predefined DNS namespace (for domain names)
uuidv3('hello.example.com', uuidv3.DNS); // ⇨ '9125a8dc-52ee-365b-a5aa-81b0b3681cf6'

// ... using predefined URL namespace (for, well, URLs)
uuidv3('http://example.com/hello', uuidv3.URL); // ⇨ 'c6235813-3ba4-3801-ae84-e0a6ebb7d138'

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
uuidv3('Hello, World!', MY_NAMESPACE); // ⇨ 'e8b5a51d-11c8-3310-a6ab-367563f20686'
```

Version 4 (random):

```javascript
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

Version 5 (namespace):

```javascript
// ... using predefined DNS namespace (for domain names)
uuidv5('hello.example.com', uuidv5.DNS); // ⇨ 'fdda765f-fc57-5604-a269-52a7df8164ec'

// ... using predefined URL namespace (for, well, URLs)
uuidv5('http://example.com/hello', uuidv5.URL); // ⇨ '3bbcee75-cecc-5b56-8031-b6641c1ed1f1'

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
uuidv5('Hello, World!', MY_NAMESPACE); // ⇨ '630eb68f-e0fa-5ecc-887a-7c7a62614681'
```

## Building

ES modules are transpiled via rollup

```bash
npm run build
```
