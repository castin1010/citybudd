import styled from 'styled-components'

export const AuthCard = styled.div`
	transition:all 300ms ease-in 200ms;
	position:relative;
	margin:auto;
	width:400px;
	height:auto;
	transform:translateY(200px);
	background-color:#fff;
	box-shadow:0 15px 35px 0 rgba(42,51,83,.12),0 5px 15px rgba(0,0,0,.06);
	border-radius:5px;
	text-align:center;
	padding:30px !important;
	fonnt-family:montserrat;
	h1{
		font-family:montserrat;
	}
	& .actions{
		display:flex;
		flex-wrap:wrap;
		& .col{
			flex:1;
		}
	}
	p{
		text-align:left;
		font-family:montserrat;
		padding:10px 0;
		& a{
			text-decoration:none;
			color:light-grey;
		}
	}
`
