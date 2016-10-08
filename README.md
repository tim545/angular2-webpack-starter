Angular2 Webpack Starter
===

#### Installing

Fork or download this repo into a new project and run `npm install && npm start`.

#### Setting up for your own project

A few things need to be changed from the 'example' settings:

1. Update the `tslint.json` file to use different prefix's:
```
"pipe-naming": [true, "camelCase", "your-prefix"],
"directive-selector-prefix": [true, "your-prefix"],
"component-selector-prefix": [true, "your-prefix"],
```

2. Update the two example components so their `selector` values use the prefix you defined in the previous step.

#### Caveats

**Pug** When using the [Pug](https://pugjs.org) template engine some ng2 syntax needs special treatment. Event, two-way and attribute binding must be wrapped in single quotes, as explained in this [issue](https://github.com/pugjs/pug/issues/2050).