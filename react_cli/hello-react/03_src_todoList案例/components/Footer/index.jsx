import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll = (e) => {
    const { checkAllTodo } = this.props
    checkAllTodo(e.target.checked)
  }
  ClearAllCompleted = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    // 已完成的个数
    const completedCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    // 总个数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={completedCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{completedCount}</span> / 全部{total}
        </span>
        <button onClick={this.ClearAllCompleted} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
