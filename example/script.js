import modal from '../src/modal'

const modalHandler = modal({
  'modal-id': {
    onOpen: () => console.log('Modal opened'),
    onClose: () => console.log('Modal closed')
  }
})

document
  .getElementById('programatic-open')
  .addEventListener('click', () => modalHandler.open('modal-id'))

document
  .getElementById('programatic-close')
  .addEventListener('click', () => modalHandler.close())
