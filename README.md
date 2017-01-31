[![npm version](https://badge.fury.io/js/mn-dialog.svg)](https://badge.fury.io/js/mn-dialog)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-dialog.svg)](https://gemnasium.com/github.com/minimalist-components/mn-dialog)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)  

# mn-dialog

Minimalist dialog component, agnostic to framworks.

See the [demo](https://minimalist-components.github.io/mn-dialog/)

<a href="https://minimalist-components.github.io/mn-dialog/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-dialog/master/preview.gif">
</a>

### Install

```sh
npm install --save mn-dialog
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-dialog/tree/master/dist) with your preferred tool.

### Usage

Add to your html, the tag `mn-dialog` and assign to it an `id`, e.g.

```html
<mn-dialog id="example">
  <!-- here goes the content of your dialog -->
</mn-dialog>
```

and to open this dialog, you can add to any element (we suggest a button), the attibute `open-dialog` with id as value, e.g.

```html
<!-- when click in the button, dialog will be opened -->
<button open-dialog="example">Open dialog</button>
```


finally, to close the button, user can click outside of dialog, or press the key `esc`, but if you can add to another element, use the attribute `close-dialog`, e.g.

```html
<!-- id of dialog dont be required -->
<button close-dialog>X</button>
```


### Javascript

If you want to use javascript to open or close a mn-dialog, just use these methods, available directly on element, e.g.

```js
const dialog = document.querySelector('mn-dialog#example')
dialog.open() // open the dialog

setTimeout(() => {
  dialog.close() // close the dialog
}, 2000) // after 2 seconds :D
```


### disable click outside

In desktop, maybe you want disable click outside closing, you can do this, adding a class `.disable-click-outside`, e.g.

```html
<mn-dialog id="example" class="disable-click-outside"></mn-dialog>
```

and, if you have a lot of dialogs, and want disable all, just define in javascript, using the method `.clickOutside()`, e.g.

```js
MnCode.clickOutside(false) // disable
```

