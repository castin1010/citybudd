import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../../context/auth-context'

export const Button = styled.button`
	color:#fff;
	background-color:#6573c3;
	border-radius:5px;
	font-size:12px;
	border:0;
	text-transform:uppercase;
	width:100%;
	padding:10px;
	font-weight:bold;
	font-family:montserrat;
`

export const DirectionButton = styled(Button)`
	background:transparent;
	color:#000;
	float:right;
	& svg{
		background-color:blue;
		color:#fff;
		display:inline-block;
		padding:2px 15px;
		font-size:24px;
		margin-left:15px;
		position:relative;
		top:5px;
	}
`

const LogoutButtonWrapper = styled.button`
	color:#212121;
	background-color:#e9e9e9;
	width:100%;
	padding:10px;
	text-align:center;
	border:0;
	border-radius:5px;
	font-family:montserrat;
	cursor:pointer;
	outline:none;
	& svg{
		margin-right:10px;
	}
`

export const LogoutButton = () => {
	const { logout } = useAuth()
	return(
	<LogoutButtonWrapper onClick={logout}>
		<FontAwesomeIcon icon='power-off'/>
		Logout
	</LogoutButtonWrapper>
	)
}
