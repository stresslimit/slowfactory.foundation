
export default (images, element) => {

  console.log('started')
  init(element)

  function init(element, i) {
    if ( !i || i >= images.length ) i = 0

    // console.log('we did it', i, images[i])
    element.src = images[i]
    setTimeout(init, 750, element, i+1)
  }

}
