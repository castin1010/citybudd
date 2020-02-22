import React from "react";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { UserCardNav } from "../common/user";
import { Toggle } from "react-toggle-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LogoutButton } from '../common/buttons'

const NavigationWrapper = styled.div`
	width: 100%;
	height: auto;
	border-radius: 5px;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
		0 5px 15px rgba(0, 0, 0, 0.06);
`;

const NavSection = styled.div`
	flex: 1;
	height: 100px;
	background-color: #fff;
	border-radius: 5px;
	display: block;
	font-family: montserrat;
	padding:10px;
	&.darkmode {
		font-size: 10px;
		font-weight: bold;
		padding: 0px 10px 5px 110px;
	}
`;

function ToggleDarkMode() {
	const [darkModeOn, setDarkModeOn] = React.useState(false);

	const toggleMode = () => setDarkModeOn(!darkModeOn);

	return (
		<React.Fragment>
			<label htmlFor="dark-mode">Dark Mode
				<Toggle
					name="dark-mode"
					radius="3px"
					radiusBackground="2px"
					knobRadius="2px"
					height="16px"
					width="30px"
					knobHeight="8px"
				/>
			</label>
		</React.Fragment>
	);
}

const NavigationLinks = styled.ul`
	text-align:left;
	padding:0;
	display:block;
	& li{
		position:relative;
		font-weight:400;
		font-family:montserrat,monospace;
		list-style:none;
		font-size:14px;
		font-weight:500;
		background-color:#fff;
		padding:8px 5px;
		border-bottom:1px solid #f3f3f3;
		&:last-child{
			border:0;
		}
		&:hover{
			cursor:pointer;
			trnasition:all 200ms ease-in-out;
			background-color:#f3f7f9;
		}
		& a{
			text-decoration:none;
			display:block;
			width:100%;
			color:#000;
			& svg{
				margin-right:5px;
				display:inline-block;
				min-width:30px;
				color:#c0c0c0;
			}
		}
	}
`

const navigation_links = [
	{
		label:'Home',
		icon:'home',
		to:"/"
	},
	{
		label:'Notifications',
		icon:'bell',
		to:'/notifications'
	},
	{
		label:'Inbox',
		icon:'inbox',
		to:'/inbox'
	},
	{
		label:'Contacts',
		icon:'address-book',
		to:'/contacts'
	},
	{
		label:'Groups',
		icon:'users',
		to:'/groups'
	},
	{
		label:'Resources',
		icon:'university',
		to:'/resources'
	},
	{
		label:'Settings',
		icon:'cog',
		to:'/settings'
	}
]

export default function() {
	return (
		<NavigationWrapper>
			<NavSection>
				<UserCardNav />
			</NavSection>
			<NavSection className="darkmode">
				<ToggleDarkMode />
			</NavSection>
			<NavSection>
				<NavigationLinks>
					{navigation_links && navigation_links.map((nav,idx) => (
						<li>
							<NavLink to={`${nav.to}`}>
								<FontAwesomeIcon icon={nav.icon}/>
								{nav.label}
							</NavLink>
						</li>
					))}
					<LogoutButton/>
				</NavigationLinks>
			</NavSection>
		</NavigationWrapper>
	);
}
