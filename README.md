# nuxt-twitter-widgets-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-twitter-widgets-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-twitter-widgets-module)
[![npm](https://img.shields.io/npm/dt/nuxt-twitter-widgets-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-twitter-widgets-module)
[![CircleCI](https://img.shields.io/circleci/project/github/https://github.com/miyaoka/nuxt-twitter-widgets-module.svg?style=flat-square)](https://circleci.com/gh/https://github.com/miyaoka/nuxt-twitter-widgets-module)
[![Codecov](https://img.shields.io/codecov/c/github/https://github.com/miyaoka/nuxt-twitter-widgets-module.svg?style=flat-square)](https://codecov.io/gh/https://github.com/miyaoka/nuxt-twitter-widgets-module)
[![Dependencies](https://david-dm.org/https://github.com/miyaoka/nuxt-twitter-widgets-module/status.svg?style=flat-square)](https://david-dm.org/https://github.com/miyaoka/nuxt-twitter-widgets-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Twitter widgets loader for Nuxt

[📖 **Release Notes**](./CHANGELOG.md)

## Features

* Add twitter widgets script to header
* [Initialize embedded tweet content](https://dev.twitter.com/web/javascript/initialization) on component mounted or updated by custom directive.

## Setup

* Add `nuxt-twitter-widgets-module` dependency using yarn or npm to your project
* Add `nuxt-twitter-widgets-module` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-twitter-widgets-module',

    // With options
    [
      'nuxt-twitter-widgets-module',
      {
        directiveName: 'twitter-widgets',
        scriptUrl: '//platform.twitter.com/widgets.js'
      }
    ]
  ]
}
```

## Usage

Add directive (default: v-twitter-widgets) to component that has tweet.

```
<some-component v-html="hasTweetText" v-twitter-widgets/>
```

## Development

* Clone this repository
* Install dependnecies using `yarn install` or `npm install`
* Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Masaya Kazama <mailto:miyan@t-p.jp>
