import React from 'react'
import styled from 'styled-components'
import Layout from './layout'

const PrivatePage = styled.div`
	position:fixed;
	top:0;
	left:0;
	right:0;
	height:100vh;
`

export default function(){
	return(
		<PrivatePage>
			<Layout/>
		</PrivatePage>
	)
}
