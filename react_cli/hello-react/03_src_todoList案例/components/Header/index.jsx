import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'
export default class Header extends Component {

  // 对接收的类型进行一些限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handleKeyUp = (e) => {
    const { keyCode, target } = e
    const { addTodo } = this.props
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入项不能为空！')
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    addTodo(todoObj)
    // 清空输入框
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
