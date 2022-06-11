import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: '数学', done: true },
            { id: '002', name: '物理', done: true },
            { id: '003', name: '化学', done: false }
        ]
    }
    // 清除已完成项
    clearAllDone = () => {
        const { todos } = this.state
        const newArr = todos.filter(todo => {
            // return !todo.done
            return todo.done !== true
        })
        this.setState({ todos: newArr })
    }
    checkAllTodo = (done) => {
        const { todos } = this.state
        const newArr = todos.map(todo => {
            return { ...todo, done }
        })
        this.setState({ todos: newArr })
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newArr = todos.map(todo => {
            if (todo.id === id) {
                // return {...todo,done:done}
                return { ...todo, done }
            } else { return todo }
        })
        this.setState({ todos: newArr })
    }
    deleteItemById = (id) => {
        const { todos } = this.state
        const newArr = todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({ todos: newArr })
    }
    render() {
        const { todos } = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={todos} updateTodo={this.updateTodo} deleteItemById={this.deleteItemById} />
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                    </div>
                </div>

            </div >
        )
    }
}
