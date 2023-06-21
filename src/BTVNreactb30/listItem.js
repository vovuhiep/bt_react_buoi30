import React, { Component } from 'react'
import Item from "./item"

export default class ListItem extends Component {
    render() {
        return (
    <div style={{display: 'flex'}}>
        <Item/>
        <Item/>
        <Item/>
    </div>

    
        )
    }
}
