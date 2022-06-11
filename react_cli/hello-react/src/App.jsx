import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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

                            <MyNavLink to='/about' title='About' >About</MyNavLink>
                            <MyNavLink to='/home' title='Home' >Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                {/* 用Switch包裹的话， 如果匹配上一个组件，后面的就不匹配了。
                                通常情况下，path 和 component 是一一对应的关系
                                Switch可以提高路由匹配效率（单一匹配）
                            */} 
                                <Switch>
                                    <Route path='/about' component={About} />
                                    <Route path='/home' component={Home} />
                                    {/* Redirect 一般卸载所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect 指定的路由 */}
                                    <Redirect to="/about" />
                                </Switch>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
