import styled from 'styled-components'
import {Field} from 'formik'

export const Input = styled(Field)`
	width:100%;
	border:0;
	border-radius:5px;
	padding:15px;
	background-color:#f3f7f9;
	color:#000;
	margin-bottom:20px;
	box-sizing:border-box;
	outline:none;
	font-family:montserrat,monospace;
	&:before{
		content:'';
		height:20px;
		width:100px;
		background-color:red;
		text-transform:capitalize;
		font-weight:bold;
		margin-bottom:10px;
		position:absolute;
		left:0;
		font-size:16px;
	}
`
