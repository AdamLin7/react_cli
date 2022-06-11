import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    searchUsers = () => {
        // 连续解构赋值和 重命名
        const { keyWordEle: { value: keyWord } } = this
        this.props.updateAppState({ isFirstView: false, isLoading: true, })
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then((res) => {
            // this.props.saveUsers(res.data.items)
            this.props.updateAppState({ isLoading: false, users: res.data.items })
        }, (err) => {
            this.props.updateAppState({ err: err.message })
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
