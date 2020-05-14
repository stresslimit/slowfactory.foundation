import initReactFastclick from 'react-fastclick';
import { init as mobile_menu, close_mobile_menu } from './mobile-menu'

window.onload = () => {

  initReactFastclick()
  mobile_menu()

}
