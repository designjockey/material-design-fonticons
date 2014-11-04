material-design-fonticons
=========================

Material Design Fonticons is a font converted version of the Google Material Design Icon set.

## Getting Started

### Bower

Install the Fonticons using the [Bower](http://bower.io) package manager.

```sh
$ bower install material-design-fonticons
```

### npm

You can also find all the Fonticons on [npm](http://npmjs.org).

```sh
$ npm install material-design-fonticons
```

## Usage

Take a look at [Fonticons search page] (http://designjockey.github.io/material-design-fonticons/) for all icons and categories included. Search for icons using the search field included.

## Fonts

There are multiple css files included in the `styles` folder. The `mdfi.css` file includes the `mdfi` font with icons from all the categories, while other category specific css files `mdfi_{category}.css` contain category specific icons with font name `mdfi-{category}`.

##Using the Fonticons

For using the icons follow the below instructions. The icon classes are named using the `mdfi_{category}_{original_icon_name}` convention. Refer to [Fonticons search page] (http://designjockey.github.io/material-design-fonticons/) for class names.

Reference the specific stylesheet:

```html
	<link href="styles/mdfi.css" rel="stylesheet">
```

Use the icon:

```html
	<i class="mdfi_action_face"></i>
```

## Licence

All fonts are released under an [SIL OFL 1.1](http://scripts.sil.org/OFL) license.
