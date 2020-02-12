import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { Formik } from 'formik'
import { AuthCard } from '../components/common/authForm'
import { Input }  from '../components/common/inputs';
import { Button  } from '../components/common/buttons';
import axios from 'axios'

const SignupPage = styled.div`
position:absolute;
top:0;
left:0;
right:0;
height:100vh;
background-color:#f3f7f9;
`

export default function(){
	return(
		<SignupPage>
			<Formik 
				initialValues={{first_name:'',last_name:'',email:'',password:'',cpassword:''}}
				validate={values => {
				const errors={};
					if(!values.email){
						errors.email = 'Required';
					}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i.test(values.email)){
						errors.email = 'Invalid email address'
					}
				}}
				onSubmit={(values,setSubmitting) => {
				axios.post('/auth/users/',{...values})
						.then(res => console.log(res))
						.catch(err => console.log(err))
				}}
			>
			<AuthCard>
				<h1>City Buddies</h1>
				<Input name='first_name' placeholder='First Name'/>
				<Input name='last_name' placeholder='Last Time'/>
				<Input name='email' type='email' placeholder='Email'/>
				<Input name='password' type='password' placeholder='Password'/>
				<Input name='cpassword' type='password' placeholder='Confirm password'/>
				<div className='actions'>
					<div className='col'></div>
					<div className='col'>
						<Button>Create Account</Button>
					</div>
				</div>
				<p>Already have an account ? <NavLink to='/login'>Login</NavLink></p>
			</AuthCard>
			</Formik>
		</SignupPage>
	)
}
