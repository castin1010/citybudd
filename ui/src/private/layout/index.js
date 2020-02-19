import React from 'react'
import styled from 'styled-components'
import Navigation from '../../components/navigation'
import { Switch,Route } from 'react-router-dom'

// Scenes
import Home from '../scenes/home'
import Notifications from '../scenes/notifications'
import Inbox from '../scenes/inbox'
import Contacts from '../scenes/contacts'
import Groups from '../scenes/groups'
import Resources from '../scenes/resources'
import Settings from '../scenes/settings'

const Layout = styled.div`
	display:flex;
	width:100%;
	height:100%;
	background-color:#f3f7f9;
	& .col{
		height:100%;
		padding:10px;
		&.navigation{
			flex:2;
		}
		&.body{
			flex:10;
			padding:10px 10px 0 0;
			background-color:#fff;
		}
	}
`

export default function(){
	return (
		<Layout>
			<div className='col navigation'>
				<Navigation/>
			</div>
			<div className='col body'>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/notifications' component={Notifications}/>
					<Route path='/inbox' component={Inbox}/>
					<Route path='/contacts' component={Contacts}/>
					<Route path='/groups' component={Groups}/>
					<Route path='/resources' component={Resources}/>
					<Route path='/settings' component={Settings}/>
				</Switch>
			</div>
		</Layout>
	)
}
