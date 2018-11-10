# Modal.js &middot; ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@chaucerbao/modal.js.svg)

A simple, tiny modal.

## Usage
Structure your modal similar to the HTML example below. There are 4 attributes that Modal.js recognizes:
`data-modal` - The modal container
`data-modal-dialog` - The dialog box that houses the modal's content
`data-modal-trigger` - Add it to any element(s) to attach a click-handler for opening a modal with the given ID
`data-modal-close` - (Optional) Add it to any element(s) to attach a click-handler for closing the modal

```html
<!-- HTML -->
<button data-modal-trigger="the-modal-id">Open a modal</button>

<div id="the-modal-id" data-modal>
  <div data-modal-dialog>
    <h1>Amazing title</h1>
    <p>Very intriguing content.</p>
    <button data-modal-close>Close Modal</button>
  </div>
</div>
```

Initialize your modal(s) with customizable options for each modal.
```javascript
/* JavaScript */
modal({
  /* Options specifically for the modal with the ID of 'the-modal-id' */
  'the-modal-id': {
    onOpen: () => console.log('Modal opened'),
    onClose: () => console.log('Modal closed')
  }
})
```

Now, style your modal ([example](example/style.css)) with CSS.

## Options
Available options for `modal(options)` where `options` are defined for each modal by its ID.

Option  | Type     | Description
------- | -------- | -----------
onOpen  | function | A callback function to run when a modal is opened
onClose | function | A callback function to run when a modal is closed
