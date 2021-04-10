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
  // motiongradient()
  if ( document.getElementById('js-typewriter') )
    typewriter(
      sayings, // LOL global
      document.getElementById('js-typewriter')
    )

})


function motiongradient() {
/*  let a = document.querySelectorAll('.btn--jsmotiongradient')
  a.forEach((el) => {
    // console.log('setting up listener for', el)
    const root = document.documentElement;

    el.addEventListener("mousemove", (e) => {

      let x = -e.offsetX
      let y = -e.offsetY

      console.log('setting', x, y)

      // root.style.setProperty('--mouse-x', x + "px");
      // root.style.setProperty('--mouse-y', y + "px");

      el.style.setProperty('--mouse-x', x);
      el.style.setProperty('--mouse-y', y);
    })
  })*/

  const root = document.documentElement;

document.addEventListener('mousemove', e => {
    // let x = e.clientX / innerWidth;
    // let y = e.clientY / innerHeight;

    let x = e.offsetX
    let y = e.offsetY
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});
}


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
