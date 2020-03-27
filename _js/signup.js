import 'whatwg-fetch'

const success_msg = '<h2 class="title-md">Thanks!</h2>'
const exists_msg = '<h2 class="title-md">Already signed up!</h2>'

export default () => {
  document.querySelector('#signup-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let signupform = e.target
    signupform.email.disabled = true
    signupform.join.disabled = true
    let name = signupform.name.value
    let email = signupform.email.value
    fetch(
      signupform.action,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: {
            email,
            fname: name
          }
        })
      }
    ).then(
      (res, text) => {
        if (res.ok) {
          signupform.innerHTML = success_msg
        } else {
          res.json().then((json) => {
            if (json.title == 'Member Exists' )
              signupform.innerHTML = exists_msg
          }, (err) => { console.log('coundt convert json', err) })
        }
      }, (err) => { console.log('got err', err) }
    )
  })
}
