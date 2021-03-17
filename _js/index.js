import initReactFastclick from 'react-fastclick'
import formAjax from './form-ajax'
import revealAnimations from './lam-reveal-animations'
import animator from './animator'
import { init as mobile_menu, close_mobile_menu } from './mobile-menu'
import typewriter from './typewriter'


window.addEventListener('load', (e) => {

  externalLinks()
  initReactFastclick()
  mobile_menu()
  formAjax()
  animator()
  if ( document.getElementById('js-typewriter') )
    typewriter(
      sayings, // LOL global
      document.getElementById('js-typewriter')
    )

})


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
