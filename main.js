const menuBtnEl = document.querySelector('#menu-btn')
const menuListEl = document.querySelector('#menu-list')
let menuOpened = false

menuBtnEl.addEventListener('click', () => {
  toogleMenu()
})

function toogleMenu() {
  console.log('menuopened', menuOpened)
  menuOpened = !menuOpened

  menuBtnEl.querySelector('svg:nth-child(1)').classList.toggle('hidden')
  menuBtnEl.querySelector('svg:nth-child(2)').classList.toggle('hidden')

  menuListEl.classList.toggle('-translate-x-full')
}

// toogleMenu()

// import axios from 'axios'

// axios.get('https://rickandmortyapi.com/api/character', {
//   params: {
//     page: 2,
//   }
// })
//   .then(({ status, data }) => {
//     console.log('data', status, data)
//   })

// function getUserInfo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(({ name: 'Jack' })), 300)
//   })
// }

// async function run () {
//   const [data1, _, posts] = await Promise.all([
//     getUserInfo(),
//     new Promise(resolve => setTimeout(() => resolve(), 1000)),
//     axios.get('./data/posts.json')
//   ])

//   console.log('Done!', posts)
// }

// window.run = run



// const btnEl = document.querySelector('#open-btn')

// const modalEl = document.querySelector('#modal')

// btnEl.addEventListener('click', () => openModal())

// modalEl.querySelector('div:nth-child(1)').addEventListener('click', () => closeModal())

// function openModal() {
//   modalEl.classList.remove('hidden')
//   modalEl.classList.add('flex')
//   modalEl.classList.add('fade-in')
//   modalEl.classList.remove('fade-out')
//   document.querySelector('body').classList.add('overflow-hidden')
// }

// function closeModal() {
//   modalEl.classList.add('fade-out')
//   modalEl.classList.remove('fade-in')
//   document.querySelector('body').classList.remove('overflow-hidden')

//   setTimeout(() => {
//     modalEl.classList.add('hidden')
//     modalEl.classList.remove('flex')
//   }, 300)
// }
