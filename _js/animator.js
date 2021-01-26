
export default () => {

  // console.log('started')
  init()

  function init() {
    let a = document.querySelectorAll('.animator')
    // console.log('init')
    a.forEach( (el) => {
      // console.log('init for ', el)
      let imgs = eval(el.dataset.imgs)
      // console.log(imgs)
      let t = el.dataset.time || 750
      animate(el, imgs, t)
    })
  }


  function animate(element, images, t, i) {
    if ( !i || i >= images.length ) i = 0

    // console.log('we did it', i, images[i])
    element.src = images[i]
    setTimeout(animate, 750, element, images, t, i+1)
  }

}
