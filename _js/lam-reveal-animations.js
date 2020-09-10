import ScrollReveal from 'scrollreveal'

export default () => {

  if ( !document.querySelector('.js-reveal') ) return

  console.log('found js-reveal')

  let slideLeft = {
    origin: 'right'
  }
  let slideRight = {
    origin: 'left'
  }
  let slideUp = {
    delay: 100,
    origin: 'bottom'
  }
  ScrollReveal({
    debug: true,
    mobile: false,
    duration: 800,
    // reset: true,
    distance: '160%',
    delay: 700,
    opacity: null,
    beforeReveal: function (el) {
      console.log('revealing', el)
    }
  })
  ScrollReveal().reveal('.js-reveal.slideLeft', slideLeft)
  ScrollReveal().reveal('.js-reveal.slideRight', slideRight)
  ScrollReveal().reveal('.js-reveal.slideUp', slideUp)

}
