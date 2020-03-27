import React from 'react/addons'
const E = React.DOM
const CSSTransitionGroup = React.createFactory(React.addons.CSSTransitionGroup)
import cookie from 'react-cookie'

// console.log('resetting cookie for dev')
// cookie.remove('newsletter_popup_seen')

export default React.createFactory(React.createClass({
  getInitialState () {
    return {
      show: !cookie.load('newsletter_popup_seen')
    }
  },
  close () {
    this.set_cookie()
    this.setState({ show: false })
  },
  set_cookie () {
    cookie.save('newsletter_popup_seen', true)
  },
  render () {
    return CSSTransitionGroup({
        transitionName: 'reveal',
        transitionAppear: true
      },
      this.state.show
        ? E.div({ className:'newsletter-popup theme--ondark' },
            E.div({ className:'container newsletter-inner' },
              E.div({
                className: 'title-lg',
                style: { position:'absolute', top:'0', right:'1em', cursor:'pointer', padding:'.2em .5em;' },
                onClick: this.close
              }, '×'),
              E.div({ className: 'col-lg-10 col-lg-offset-1' },
                E.h3({ className: 'title-md newsletter-popup--title' }, 'Sign up for our newsletter and get 10% off'),
                E.div({
                  dangerouslySetInnerHTML: { __html: this.props.content }, // global var from html page
                  onClick: this.set_cookie
                })
              )
            )
          )
        : ''
    )
  }
}))
