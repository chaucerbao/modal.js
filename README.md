# Modal.js &middot; ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@chaucerbao/modal.js.svg)

A simple, tiny modal.

## Usage
Structure your modal similar to the HTML example below. There are 3 attributes that Modal.js recognizes:
- `data-modal` - The modal container
- `data-modal-trigger` - Add it to any element(s) to attach a click-handler for opening a modal with the given ID
- `data-modal-close` - (Optional) Add it to any element(s) to attach a click-handler for closing the modal

```html
<!-- HTML -->
<button data-modal-trigger="modal-id">Open a modal</button>

<div id="modal-id" data-modal>
  <div data-modal-dialog aria-modal="true" role="dialog">
    <h1>Amazing title</h1>
    <p>Very intriguing content.</p>
    <button data-modal-close>Close Modal</button>
  </div>
</div>
```

Initialize your modal(s) with customizable options for each modal.
```javascript
/* JavaScript */
const modalHandler = modal({
  /* Options for all modals */
  '*': {
    onOpen: () => console.log('onOpen *'),
    onClose: () => console.log('onClose *')
  },

  /* Options specifically for the modal with the ID of 'modal-id' */
  'modal-id': {
    onOpen: (modal) => console.log('Modal opened', modal),
    onClose: (modal) => console.log('Modal closed', modal)
  }
})
```

You can also open/close modals programmatically after initialization.
```javascript
/* JavaScript */
document
  .getElementById('opener')
  .addEventListener('click', () => modalHandler.open('modal-id'))

document
  .getElementById('closer')
  .addEventListener('click', () => modalHandler.close())
```

Now, style your modal ([example](example/style.css)) with CSS.

## Options
Available options for `modal(options)` where `options` are defined for each modal by its ID.

Option  | Type            | Description
------- | --------------- | -----------
onOpen  | function(modal) | A callback to run when a modal is opened
onClose | function(modal) | A callback to run when a modal is closed
