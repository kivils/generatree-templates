# Templates for "Generation Tree" application

Templates for [Generation Tree](http://generatree.com/index.html)

## Requirements
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Gulp](https://gulpjs.com/)

## Features
- development with hot-reload
- postcss for styling
- babel for javascript

## Templates
- **template_1_EN** - default template for EN
- **template_1_RU** - default template for RU
- **template_simple_RU** - Simple template
    - Added mobile phones and tablets support
    - Removed some sections from HTML (slider, theme switcher, etc.)
    - Some settings in "Generation Tree" application for site generation ignored (custom homepage, etc.)
    - Replaced logo with site name
    - Updated versions of jquery and other libraries
    - Updated styles
    - Refactored scripts
    - Replaced outdated lightbox.js with [fancybox](https://fancyapps.com/fancybox/3/)

(!) Currently only one additional template is created - **Simple for RU**

## Project structure
- **app/** - source files
- **dist/** - build files
- **build/** - gziped templates to use in "Generation Tree" application
- **gulp-tasks/** - tasks for gulp task runner
- **gulpfile.babel.js** - main gulp file
- **gulp-vars.js** - variables for gulp tasks
    - **GTtemplateName** - name of the active template (on which you're planning to work, and which will be generated)
    - **injectCss** - list of css files to use in template
    - **injectJs** - list of js files to use in template
    - other variables

## Template structure

**template_simple_RU** (new templates must have the same structure to match "Generation Tree" application)

- ***.html** - layouts for pages in main navigation (all files should be kept, even if you don't want to show some of them - otherwise "Generation Tree" application will crash during site generation)
- **doc/** - empty folder, for images uploaded in "Generation Tree" application
- **event/event_0.html** - layout for each event
- **family/family_0.html** - layout for each family
- **person/person_0.html** - layout for each person
    - **person/images/** - image folder for persons avatars
- **tree/tree_t0_0.html** - layout for each tree
- **tree/trees.html** - layout for full family tree (in main navigation)


- **styles/** - source css files
    **styles.css** - main css file
- **scripts/** - source javascript files
    **main.js** - entry point
- **css/** - generated css files
- **css/** - generated javascript files
- **assets/** - duplicates of treejs files (required explicitly for "Generation Tree" application)
- **fonts/** - fonts for the template


## Gulp tasks
``
yarn run serve
``

- Starts local server with hot-reload
- Active template is set in **gulp-vars.js** via **GTtemplateName** variable

``
yarn run build
``
- Generates dist/ folder with build files
- Generates zipped template for "Generation Tree" application
- Bumps version in package.json
- Bumps version of assets in generated templates (to avoid assets caching issues in browser)


## Issues in template
- Gallery function for fancybox (**data-lightbox-gallery** must be replaced with **data-fancybox**)
