import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = ({ Mouse: false })
  handleMouse = (flag) => {
    return () => {
      this.setState({ Mouse: flag })
    }
  }
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }
  handleDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteItemById(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { Mouse } = this.state
    return (
      <li style={{ backgroundColor: Mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} onChange={this.handleCheck(id)}>
        <label>
          <input type="checkbox" checked={done} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: Mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
