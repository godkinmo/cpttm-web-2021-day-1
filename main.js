const btnEl = document.querySelector('#open-btn')

const modalEl = document.querySelector('#modal')

btnEl.addEventListener('click', () => openModal())

modalEl.querySelector('div:nth-child(1)').addEventListener('click', () => closeModal())

function openModal() {
  modalEl.classList.remove('hidden')
  modalEl.classList.add('flex')
  modalEl.classList.add('fade-in')
  modalEl.classList.remove('fade-out')
  document.querySelector('body').classList.add('overflow-hidden')
}

function closeModal() {
  modalEl.classList.add('fade-out')
  modalEl.classList.remove('fade-in')
  document.querySelector('body').classList.remove('overflow-hidden')

  setTimeout(() => {
    modalEl.classList.add('hidden')
    modalEl.classList.remove('flex')
  }, 300)
}
