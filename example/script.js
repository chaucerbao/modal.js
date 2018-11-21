import modal from '../src/modal'

const modalHandler = modal({
  '*': {
    onOpen: (_modal) => console.log('onOpen *'),
    onClose: (_modal) => console.log('onClose *')
  },
  'modal-id': {
    onOpen: (modal) => console.log('Modal opened', modal),
    onClose: (modal) => console.log('Modal closed', modal)
  }
})

document
  .getElementById('programatic-open')
  .addEventListener('click', () => modalHandler.open('modal-id'))

document
  .getElementById('programatic-close')
  .addEventListener('click', () => modalHandler.close())
