import React, { Component } from 'react'
import hljs from 'highlight.js'
import '../../../node_modules/highlight.js/styles/atom-one-light.css'
import './Code.css'

export default class Code extends Component {
  element = null

  componentDidMount () {
    hljs.highlightBlock(this.element)
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { children, lang } = this.props
    return (
      <pre>
        <code ref={el => (this.element = el)} class={lang}>{children}</code>
      </pre>
    )
  }
}
