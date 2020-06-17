import serialize from 'form-serialize'

export default () => {

  // instructions to submit to google sheets: https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175

  let form = document.querySelector('#js-brands-form')
  if ( !form ) return

  let url = 'https://script.google.com/macros/s/AKfycbw6EQc2lYMrN-AYFzrpwY0cV40Ksn88H0pyMPnRt4AdVMFCCIc/exec'

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    form.button.disabled = true
    form.button.innerHTML = "Sending"

    console.log('sending', serialize(form))

    fetch(url+'?'+serialize(form), {
      method: "GET"
    })
    .then(function(response) {
      console.log(response)
      form.innerHTML = '<p class="title-md">Thanks! We will be in touch asap!</p>'
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })

  })

}
