export default (card) => {

  console.log("testing")

  // let card = document.querySelector('.card')
  let lastCard = document.querySelector(".card-list .card").length - 1

  document.querySelector('.next').addEventListener('click', function(){
  	let prependList = function() {
  		if( card.classList.contains('activeNow') ) {
  			let slicedCard = card.slice(lastCard).classList.remove('transformThis activeNow')
  			$('ul').prepend(slicedCard)
  		}
  	}
  	document.querySelector('li').last().classList.remove('transformPrev').classList.add('transformThis').prev().classList.add('activeNow')
  	setTimeout(function(){ prependList() }, 150)
  })


  document.querySelector('.prev').click(function() {
  	let appendToList = function() {
  		if( card.classList.contains('activeNow') ) {
  			let slicedCard = card.slice(0, 1).classList.add('transformPrev')
  			document.querySelector('.card-list').appendChild(slicedCard)
  		}
    }
		document.querySelector('li').classList.remove('transformPrev').last().classList.add('activeNow').prevAll().classList.remove('activeNow')
  	setTimeout(function(){ appendToList()}, 150)
  })

}

