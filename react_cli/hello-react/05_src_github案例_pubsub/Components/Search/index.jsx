import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
    searchUsers = () => {
        // 连续解构赋值和 重命名
        const { keyWordEle: { value: keyWord } } = this
        PubSub.publish('changeState', { isFirstView: false, isLoading: true })
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then((res) => {
            // this.props.saveUsers(res.data.items)
            PubSub.publish('changeState', { isLoading: false, users: res.data.items })
        }, (err) => {
            PubSub.publish('changeState', { err: err.message })
        })
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search" ref={c => this.keyWordEle = c} />&nbsp;
                        <button onClick={this.searchUsers} >Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
