import React, { Component } from 'react'

import Header from './header'
import ListItem from './listItem'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ListItem/>
      </div>
    )
  }
}
