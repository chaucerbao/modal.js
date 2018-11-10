import modal from '../src/modal'

modal({
  'modal-id': {
    onOpen: () => console.log('Modal opened'),
    onClose: () => console.log('Modal closed')
  }
})
