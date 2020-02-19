import React from 'react'
import Login from './login'
import Register from './register'
import { Switch,Route,Redirect } from 'react-router-dom'

export default function(){
	return(
		<Switch>
			<Route exact path='/' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route render={props => <Redirect to='/'/>}/>
		</Switch>
	)
}
