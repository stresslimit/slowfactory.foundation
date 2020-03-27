import initReactFastclick from 'react-fastclick';

// Page-specific
import Typewriter from './typewriter' // index
  // import Animator from './animator'     // study-hall

import { init as mobile_menu, close_mobile_menu } from './mobile-menu'


window.onload = () => {

  initReactFastclick()
  mobile_menu()
  // close_mobile_menu()

  const f = document.getElementById('js-typewriter')
  if ( f )
    Typewriter([
      'NASA astronauts',
      'Indigenous water and land activists',
      'Sustainable space technology researchers',
      'Responsible clothing manufacturers',
      'Cultural influencers',
      'Soil and compost advocates',
      'Industrial textile recyclers',
      'Blockchain and technology experts',
      'Leaders in the fashion space',
      'Global brands',
      'Supply chain experts',
      'Underground streetwear icons',
      'Advanced new material scientists'
      ], f)

}
