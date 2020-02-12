import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from './login'
import Signup from './signup'

export default function(){
	return(
		<Switch>
			<Route path='/login' component={Login}/>
			<Route path='/signup' component={Signup}/>
			<Route render={props => <Login {...props}/>}/>
		</Switch>
	)
}
