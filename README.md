nice-grids
============

Simple and cool **jQuery** plugin to create always good looking grids

# Index

  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [License](#license)

# Introduction

**niceGrids** is a jQuery plugin, that lets you easily create align your grids (such as bootstrap, but not only!) on your website!
See the demo at tonysamperi.github.io/nice-grids

# What does it do?

Have you ever built a grid system with columns?
Have you ever given this columns a background-color?
Did you notice that heights are quite always different?

**niceGrids**  will solve this problem for you!

The plugin will set heights onLoad and will refresh calculations when page is resized!
Now you are thinking: "But wait. This could really slow down my page".

Don't worry! **niceGrids** has a buffered resize listener, so it won't fire before 250ms from the last resize!
Also it's set to do anything if resolution is less than 769px, to preserve mobile performance!

# Requirements

The only requirement needed is [jQuery](https://jquery.com/download/) that you can install it via [Bower](http://bower.io/).

# Usage

Simply include the nice-grids JS
```html
<html>
    <head>
        <script type="text/javascript" src="path-to/nice-grids.js"></script>
    </head>
</html>
```

Create a container with the "nice-grids" attribute and you're done!
```html
<any nice-grids>
    <my-left-column>
    </my-left-column>
    <my-middle-column>
    </my-middle-column>
	<my-right-column>
    </my-right-column>
</any>
```
**Params**

No params yet! Write me if you think anything's missing!

# License

Check out LICENSE file (MIT)
