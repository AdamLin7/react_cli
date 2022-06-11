import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './pages//Home'
import About from './pages/About'
import Header from './Components/Header'
export default class App extends Component {
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            <NavLink activeClassName='demo' className="list-group-item" to='/about'>About</NavLink>
                            <NavLink activeClassName='demo' className="list-group-item " to='/home'>home</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                <Route path='/about' component={About} />
                                <Route path='/home' component={Home} />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
