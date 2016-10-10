Angular2 Webpack Starter
===

Starter project for new Angular2 using Webpack applications based off the official [documentation](https://angular.io/docs/ts/latest/guide/webpack.html).

### Installing

Fork or download this repo into a new project and run `npm install && npm start`.

### Setting up for your own project

A few things need to be changed from the 'example' settings:

1. Update the `tslint.json` file to use different prefix's:
```
"pipe-naming": [true, "camelCase", "your-prefix"],
"directive-selector-prefix": [true, "your-prefix"],
"component-selector-prefix": [true, "your-prefix"],
```

2. Update the two example components so their `selector` values use the prefix you defined in the previous step.

### Features

- Based on the official Angular2 [documentation](https://angular.io/docs/ts/latest/guide/webpack.html) for webpack
- Modular file structure
- Webpack & Typescript build system
- Unit tests with [Karma](http://karma-runner.github.io/) and [Jasmine](jasmine.github.io)
- Type management using @types
- Designed to produce static distribution files for production in a front-end-only API backed application
- Full I18N support with [ng2-translate](https://github.com/ocombe/ng2-translate)
- [Sass](sass-lang.com)
- [Pug](pugjs.org) templates

### File structure

**Source directory** uses a modular file structure for the application code, the main (app) module imports package dependencies, the router and the share module which imports all global project modules (e.g. page routes). Each child module has it's own directives/components/services which are specific to that module.

```
/src
-- /app
-- -- /modules
-- -- -- /<your-module>
-- -- -- -- /components
-- -- -- -- /directives
-- -- -- -- /services
-- -- /shared
-- -- -- router.ts
-- -- -- shared.module.ts
-- /assets
-- -- /styles
-- -- -- global-styles.scss
```

### Architecture

Produces static front-end-only applications, which is best for using in a static hosting environment such as Amazon S3 or Firebase. The application expects to be supported by an API which would have to be a CORS enabled API.

### Caveats

- **Pug**: When using the [Pug](https://pugjs.org) template engine some ng2 syntax needs special treatment. Event, two-way and attribute binding must be wrapped in single quotes, as explained in this [issue](https://github.com/pugjs/pug/issues/2050).
