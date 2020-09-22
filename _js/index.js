import initReactFastclick from 'react-fastclick'
import formAjax from './form-ajax'
import revealAnimations from './lam-reveal-animations'
// import videoScrubber from './video-scrubber'
import { init as mobile_menu, close_mobile_menu } from './mobile-menu'
// import sticky from './sticky'


window.addEventListener('load', (e) => {

  externalLinks()
  initReactFastclick()
  mobile_menu()
  formAjax()
  // revealAnimations()
  // videoScrubber()

})


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
