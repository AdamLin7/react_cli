import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
    state = {
        users: [],
        isFirstView: true,
        isLoading: false,
        err: ''
    }
    componentDidMount() {
        // data 左边的下划线的意思是，不想用这个参数，可以占个位
        this.token = PubSub.subscribe('changeState', (_, data) => {
            this.setState(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        const { users, isFirstView, isLoading, err } = this.state
        return (

            <div className="row">
                {
                    isFirstView ? <h1>请输入关键字</h1> :
                        isLoading ? <h2>加载中。。。。。。</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map(user => {
                                    return <div key={user.id} className="card">
                                        <a rel='noreferrer' href={user.html_url} target="_blank">
                                            <img alt='avator' src={user.avatar_url} style={{ width: '100px' }} />
                                        </a>
                                        <p className="card-text">{users.login}</p>
                                    </div>
                                })
                }
            </div>

        )
    }
}
