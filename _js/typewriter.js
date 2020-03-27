
export default (sayings, element) => {

  init(element)

  function init(j) {
    if ( typeof j === 'object' )
      j = 0 // first time only
    var word_counter = j < sayings.length ? j : 0
    var text = sayings[word_counter]
    var letter_counter = 0
    type(text, letter_counter, word_counter)
  }

  function type(text, letter_counter, word_counter) {
    var new_text = text.substr(0, letter_counter)
    var last_counter = text.length > letter_counter
    // attention global
    element.innerHTML = `${new_text}${ last_counter ? '|' : '' }`
    if ( last_counter )
      setTimeout(type, 40, text, letter_counter+1, word_counter)
    else
      setTimeout(init, 800, word_counter+1)
  }

}
