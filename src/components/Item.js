import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class 
Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
    }
    editItem = (e) => {
      this.props.store.editItem(e.target.name,prompt("new location"))
    }
    deleteItem = (e) => {
      this.props.store.deleteItem(e.target.name)
    }
    render() {
        return (
          <div>
            <p className = {this.props.item.completed ? "crossed" : null}>
              <label>
              <input onChange={this.checkItem} value = {this.props.item.name}  type = "checkbox" />{this.props.item.name}  {this.props.item.location}
              </label>
              <button className = "editButton" onClick = {this.editItem} name = {this.props.item.name}>edit</button>
              <button className = "deleteButton" onClick = {this.deleteItem} name = {this.props.item.name}>delete</button>
            </p>
          </div>
          )
    }
}

export default Item