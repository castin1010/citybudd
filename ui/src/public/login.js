import React from 'react'
import { NavLink } from 'react-router-dom'
import { Formik, Form,Field,ErrorMessage } from 'formik';
import styled from 'styled-components'
import axios  from 'axios'
import { Input } from '../components/common/inputs'
import { Button  } from '../components/common/buttons'
import { FormError  } from '../components/common/errors'
import { AuthCard } from '../components/common/authForm'

const LoginPage = styled.div`
position:absolute;
top:0;
left:0;
right:0;
height:100vh;
background-color:#f3f7f9;
`

export default function(){
	return(
		<LoginPage>
			<Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
	      axios.post('/auth/token/login',{...values})
		      .then(res => console.log(res))
		      .catch(err => console.log(err))
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <AuthCard>
		<h1>City Buddies</h1>
          <Input type="email" name="email" placeholder='Email Address' />
          <FormError name="email" component="div" />
          <Input type="password" name="password" placeholder='********'/>
		<FormError name="password" component="div"/>
		<div className='actions'>
			<div className='col'></div>
			<div className='col'>
		<Button type="submit" disabled={isSubmitting}>
            Login
          </Button>
			</div>
		</div>
		<p>Don't have an account yet ?<NavLink to='/signup'>Create account</NavLink></p>
        </AuthCard>
      )}
    </Formik>
		</LoginPage>
	)
}
