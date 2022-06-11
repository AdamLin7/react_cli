import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const { users, isFirstView, isLoading, err } = this.props
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
