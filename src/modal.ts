// Type Definitions
interface IOptions {
  [id: string]: {
    onOpen: () => void
    onClose: () => void
  }
}

const modal = (options: IOptions = {}) => {
  document.body.addEventListener('click', (e: MouseEvent) => {
    const element = e.target as HTMLElement

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
    const onOpen = options[id] && options[id].onOpen

    targetModal.setAttribute('data-modal', 'open')

    if (typeof onOpen === 'function') {
      onOpen()
    }
  }
}

const closeModal = (options: IOptions = {}) => {
  const modal = document.querySelector('[data-modal="open"]')

  if (modal) {
    const onClose = options[modal.id] && options[modal.id].onClose

    if (typeof onClose === 'function') {
      onClose()
    }

    modal.setAttribute('data-modal', '')
  }
}

// Export
export default modal
