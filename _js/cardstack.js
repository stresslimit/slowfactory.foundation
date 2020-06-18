export default (cardSelector) => {

  let cardList = document.querySelector('.card-list')
  // let cards = document.querySelectorAll('.card-list .card')
  if ( !cardList ) return

  var $card = $('.card')
  var $cards = $('.card-list .card')
  var lastCardIndex = $cards.length - 1


  init()

  function init() {
    let lastChild = $cards.last()
    lastChild.addClass('activeNow')
  }

  $('.next').click(function(e){
    e.preventDefault()
    var prependList = function() {
      if( $('.card-list .card').hasClass('activeNow') ) {
        var $slicedCard = $('.card-list .card').slice(lastCardIndex).removeClass('transformThis activeNow')
        $('.card-list').prepend($slicedCard)
      }
    }
    $('li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow')
    setTimeout(function(){ prependList() }, 150)
  })

  $('.prev').click(function(e) {
    e.preventDefault()
    var appendToList = function() {
      if( $('.card').hasClass('activeNow') ) {
        var $slicedCard = $('.card').slice(0, 1).addClass('transformPrev')
        $('.card-list').append($slicedCard)
      }
    }
    $('li').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow')
    setTimeout(function(){appendToList()}, 150)
  })

}