import _ from 'underscore'


const show_mobile_menu = (e) => {
  if (!document.querySelector('.mobile-menu')) return
  e.preventDefault()
  // console.log('show-mobile-menu')
  document.querySelector('.mobile-menu').classList.add('mobile-menu--open')
  document.body.classList.add('overlay-menu--open')
}
const close_mobile_menu = (e) => {
  if (!document.querySelector('.mobile-menu')) return
  // console.log('close-mobile-menu')
  document.querySelector('.mobile-menu').classList.remove('mobile-menu--open')
  document.body.classList.remove('overlay-menu--open')
}

const init = () => {
  if (!document.querySelector('.mobile-menu')) return

  _.each(document.querySelectorAll('.js-show-mobile-menu'), (el) => {
    el.addEventListener('click', show_mobile_menu)
  })

  _.each(document.querySelectorAll('.js-close-mobile-menu'), (el) => {
    el.addEventListener('click', close_mobile_menu)
  })

}

export { init, show_mobile_menu, close_mobile_menu }
