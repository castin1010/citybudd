import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled'

const Loader = styled.div`
position:fixed;
top:0;
left:0;
right:0;
height:40px;
background-color:red;
`
export default function(){
	return ReactDOM.createPortal(<Loader/>,document.getElementById('loader'))
}
