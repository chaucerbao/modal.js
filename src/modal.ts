// Type Definitions
interface IOptions {
  [id: string]: {
    onOpen: (modal: Element) => void
    onClose: (modal: Element) => void
  }
}

const modal = (options: IOptions = {}) => {
  document.body.addEventListener('click', (e: MouseEvent) => {
    const element = e.target as Element

    if (element) {
      // Trigger
      if (element.hasAttribute('data-modal-trigger')) {
        openModal(element.getAttribute('data-modal-trigger')!, options)
      }

      // Close modal
      if (
        element.hasAttribute('data-modal') ||
        element.hasAttribute('data-modal-close')
      ) {
        closeModal(options)
      }
    }
  })

  document.body.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal(options)
    }
  })

  return {
    open: (id: string) => openModal(id, options),
    close: () => closeModal(options)
  }
}

const openModal = (id: string, options: IOptions = {}) => {
  const targetModal = document.getElementById(id)

  if (targetModal) {
    const callbacks = ['*', id]
    const onOpen = callbacks
      .map(key => options[key] && options[key].onOpen)
      .filter(callback => callback)

    targetModal.setAttribute('data-modal', 'open')

    onOpen.forEach(callback => callback(targetModal))
  }
}

const closeModal = (options: IOptions = {}) => {
  const targetModal = document.querySelector('[data-modal="open"]')

  if (targetModal) {
    const callbacks = [targetModal.id, '*']
    const onClose = callbacks
      .map(key => options[key] && options[key].onClose)
      .filter(callback => callback)

    onClose.forEach(callback => callback(targetModal))

    targetModal.setAttribute('data-modal', '')
  }
}

// Export
export default modal
