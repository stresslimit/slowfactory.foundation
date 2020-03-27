import React from 'react'
const E = React.DOM

import Slideset from '../@littlebits/ui/build/slideset'
const slideset = React.createFactory(Slideset)

export default React.createFactory(React.createClass({
  getInitialState () {
    return { slides: [] }
  },
  componentWillMount () {
    this.setState({ slides: this.props.slides.map(this.process_slide) })
  },

  process_slide (slide) {
    return E.div({ dangerouslySetInnerHTML: { __html: slide }})
  },

  render () {
    const args = this.state.slides
    args.unshift(null)
    return (
      E.div(null,
        slideset.apply(this, args)
      )
    )
  }
}))
