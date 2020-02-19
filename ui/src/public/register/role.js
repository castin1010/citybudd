import React from 'react'
import { Formik,Form } from 'formik'
import { Input } from "../../components/common/inputs";

export default function(){
	return(
		<Formik
			initialValues={{
				role:''
			}}
		>
			<Form>
				<p>Are you a mentor or mentee ??</p>
				<Input name='role' as='select'>
					<option value='MENTEE'>Mentee</option>
					<option value='MENTOR'>Mentor</option>
				</Input>
			</Form>
		</Formik>
	)
}
