<p align="center"><img src="http://i.imgur.com/VOiEqxD.png"></p>

<p align="center">
  <a href="https://travis-ci.org/dmvaldman/samsara">
    <img src="https://travis-ci.org/dmvaldman/samsara.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://gitter.im/dmvaldman/samsara">
    <img src="https://badges.gitter.im/dmvaldman/samsara.svg" alt="Gitter Chat">
  </a>
</p>

SamsaraJS is a functional reactive library for animating layout. It provides a language for positioning,
orienting and sizing DOM elements and animating these properties over time. Everything in SamsaraJS — from 
the user input to the rendering pipeline — is a stream. Building a user interface becomes the art of composing streams.

SamsaraJS was created to solve performance on the mobile web. Under the hood, animations are hardware accelerated 
and batched by a single request animation frame loop. Building responsive user interfaces
is made possible with physics-based transitions, rich support for gestures, and a stream architecture that 
makes coordinating complex animations simple.

SamsaraJS doesn't have any opinions about content, only presentation. It moves rectangles around the screen — 
what you do inside those rectangles is up to you. It doesn’t include any support for routing, server syncing, 
templating or data-binding; there are plenty of other great frameworks for that. If we don’t play nicely with your tools, 
let us know and we will do our best to improve. Integrations with MVC frameworks like Backbone and React are on the roadmap.

**tl;dr** If you've ever wanted the opacity of a nav bar to respond to the displacement of a hamburger menu which
responds to a user's swipe gesture, then you might want to clone this repo.

### Getting Started

| Resources      |               |
| -------------- | ------------- |
| Guide          | [samsaraJS.org/docs](http://www.samsaraJS.org/docs/index.html)  |
| API docs       | [samsaraJS.org/reference_docs](http://www.samsaraJS.org/reference_docs/index.html)  |
| Questions      | [SamsaraJS Google Group](https://groups.google.com/forum/#!forum/samsarajs) |

### Examples

| Example  | Demo (fullscreen) | Description |
| -------- | ----------------- | ----------- |
| Logo | [demo](http://samsarajs.org/demos/Logo/index.html) • [docs](http://samsarajs.org/demos/Logo/docs/main.html) | The SamsaraJS logo |
| Cube | [demo](http://samsarajs.org/demos/Cube/index.html) • [docs](http://samsarajs.org/demos/Cube/docs/main.html) | 3D spinning cube with animated size |
| ParallaxCats | [demo](http://samsarajs.org/demos/ParallaxCats/index.html) • [docs](http://samsarajs.org/ParallaxCats/Logo/docs/main.html/index.html) | Scrollview of cat images that parallax with the scroll |
| Carousel | [demo](http://samsarajs.org/demos/Carousel/index.html) • [docs](http://samsarajs.org/demos/Carousel/docs/main.html) | A paginated scrollview converted into a slideshow with previous/next buttons |
| SideMenu | [demo](http://samsarajs.org/demos/SideMenu/index.html) • [docs](http://samsarajs.org/demos/SideMenu/docs/main.html) | A navigation UI with an exposed side drawer |
| Safari Tabs | [demo](http://samsarajs.org/demos/SafariTabs/index.html) • [docs](http://samsarajs.org/demos/SafariTabs/docs/main.html) | A scrollview imitating the mobile Safari tab viewer |

## Installation

SamsaraJS requires a small CSS file located at `dist/samsara.css` or `samsara/samsara.css`. For all of the installation methods
below, you will also need to include this CSS file for SamsaraJS to work properly.

#### Git

Clone this repo

```
	git clone git@github.com:dmvaldman/samsara.git
```

You'll find AMD modules in the `samsara` directory, CommonJS bundles in the `dist` directory, examples in the 
`examples` directory and reference documentation in the `docs` directory.

#### NPM

Install the CommonJS build of Samsara with

```
	npm install samsarajs
```

This will provide a bundled `Samsara` object. Note there is a case-difference: path keys are
capitalized for CommonJS but lowercase for AMD.

```js
	var Surface = require('samsara/dom/Surface');   // AMD
	var Surface = require('samsarajs').DOM.Surface; // CommonJS
```

The `samsara.css` file will also be included in `node_modules/samsarajs/dist/samsara.css`.

#### Window Object

Copy `dist/samsara.js` and include it as a source file. `Samsara` will then be accessible
through `window.Samsara`. This is particularly useful for sharing on sites like jsFiddle, CodePen, etc.

## Talks
[![Talk](http://i.imgur.com/tGbmVk4.png)](https://www.youtube.com/watch?v=biJXpv-6XVY)
[JSConf EU 2015 Berlin, Germany](https://www.youtube.com/watch?v=biJXpv-6XVY)

## Roadmap
- [ ] Node removal and recycling (surface.remove(), node.remove(), view.remove())
- [ ] More Tests
- [ ] Backbone.js, React.js, Vue.js integrations
- [ ] Improved Scrollview
- [ ] 3D Camera
- [ ] Migrate to es6
- [ ] More layouts
