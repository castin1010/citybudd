import React from "react";
import { Formik, Form } from "formik";
import { Input } from "../../components/common/inputs";
import axios from "axios";

export default function() {
	return (
		<Formik
			initialValues={{
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				cpassword: ""
			}}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = "Required";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i.test(
						values.email
					)
				) {
					errors.email = "Invalid email address";
				}
			}}
			onSubmit={(values, setSubmitting) => {
				axios.post("/auth/users/", { ...values })
					.then(res => console.log(res))
					.catch(err => console.log(err));
			}}
		>
			<Form>
			<Input name="first_name" placeholder="First Name" />
			<Input name="last_name" placeholder="Last Time" />
			<Input name="email" type="email" placeholder="Email" />
			<Input
				name="password"
				type="password"
				placeholder="Password"
			/>
			<Input
				name="cpassword"
				type="password"
				placeholder="Confirm password"
			/>
			</Form>
		</Formik>
	);
}
