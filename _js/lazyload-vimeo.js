

export default () => {

  var iframe = document.querySelector('iframe')

  function handleLazyLoad() {
    if (iframe.classList.contains('lazyload')) {
      const storeSRC = iframe.dataset.src

      iframe.addEventListener('lazyloaded', () => {
        delete iframe.dataset.src
        iframe.src = storeSRC
        initPlayer()
      })
    }
  }

  function initPlayer() {
    var player = new Vimeo.Player(iframe)
    player.ready().then(function (){
      console.log('player is ready!')

      // These events are not attaching? Why?
      player.on('play', function () {
        console.log('played the video!')
      })

      player.on('ended', function () {
        console.log('the video has ended')
      })
    })
  }

  handleLazyLoad()

}
