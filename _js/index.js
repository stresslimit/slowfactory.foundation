import initReactFastclick from 'react-fastclick'
import cardstack from './cardstack'
import formAjax from './form-ajax'
import { init as mobile_menu, close_mobile_menu } from './mobile-menu'

window.onload = () => {

  externalLinks()
  initReactFastclick()
  mobile_menu()
  cardstack()
  formAjax()

}


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
