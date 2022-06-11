import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'
export default class App extends Component {
    state = {
        users: [],
        isFirstView: true,
        isLoading: false,
        err: ''
    }
    // saveUsers = (users) => {
    //     this.setState({ users })
    // }
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
    render() {

        return (
            <div>
                <div className="container">
                    <Search saveUsers={this.saveUsers} updateAppState={this.updateAppState} />
                    <List {...this.state} />
                </div></div>
        )
    }
}
