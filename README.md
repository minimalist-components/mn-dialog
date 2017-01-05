# mn-dialog

Minimalist dialog component, agnostic to framworks.

See the [demo](https://minimalist-components.github.io/mn-dialog/)

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-dialog/master/sources/example/mn-dialog.gif)](https://minimalist-components.github.io/mn-dialog/)  -->

### Install

```sh
bower install --save mn-dialog
```

Or just download the main files, located in [dist/](https://github.com/minimalist-components/mn-dialog/tree/master/dist)

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

If you want to use javascript to open or close a mn-dialog, just use this methods, available directly on element, e.g.

```js
const dialog = document.querySelector('mn-dialog#example')
dialog.open() // open the dialog

setTimeout(() => {
  dialog.close() // close the dialog
}, 2000) // after 2 seconds :D
```
