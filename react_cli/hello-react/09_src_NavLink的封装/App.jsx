import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages//Home'
import About from './pages/About'
import Header from './Components/Header'
import MyNavLink from './Components/MyNavLink'
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

                            {/* <NavLink activeClassName='demo' className="list-group-item" to='/about'>About</NavLink>
                            <NavLink activeClassName='demo' className="list-group-item " to='/home'>home</NavLink> */}

                            <MyNavLink to='about' title='About' >About</MyNavLink>
                            <MyNavLink to='home' title='Home' >Home</MyNavLink>
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
