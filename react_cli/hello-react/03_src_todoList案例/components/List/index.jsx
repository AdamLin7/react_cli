import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }
  render() {
    const { todos, updateTodo, deleteItemById } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteItemById={deleteItemById} />
          })
        }
      </ul>
    )
  }
}
