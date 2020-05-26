import initReactFastclick from 'react-fastclick'
import cardstack from './cardstack'
import { init as mobile_menu, close_mobile_menu } from './mobile-menu'

window.onload = () => {

  initReactFastclick()
  mobile_menu()

  let card = document.querySelector('.card')
  if ( card )
    cardstack(card)

}
