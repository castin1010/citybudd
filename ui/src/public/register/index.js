import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AuthCard } from "../../components/common/authForm";
import { Button, DirectionButton } from "../../components/common/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Forms
import PersonalInfo from "./personal-information";
import Role from "./role";
import ReviewAndSubmission from "./review-and-submission";

import { RegistrationFormProvider,useRegistrationForm } from '../../context/registration-form-context'

const SignupPage = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100vh;
	background-color: #f3f7f9;
`;

const steps = [
	{
		name: "Personal Information",
		form: <PersonalInfo/>
	},
	{
		name: "Role",
		form: <Role/>
	},
	{
		name: "Review and Submission",
		form: <ReviewAndSubmission/>
	}
];

const StepTrackerWrapper = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	margin-bottom: 10px;
	& .step {
		font-family: montserrat, monospace;
		font-size: 12px;
		font-weight: bold;
		flex: 1;
		background-color: #f3f7f9;
		text-align: left;
		padding: 8px;
		border-top: 2px solid #f0f0f0;
		& span {
			display: inline-block;
			width: 20px;
			height: 20px;
			border-radius: 5px;
			background-color: orange;
			text-align: center;
			position: relative;
			top: -2px;
			right: 10px;
			padding-top: 5px;
		}
		&.active {
			border-top: 2px solid #25d966;
			& span {
				background-color: #25d966;
				color: #fff;
			}
		}
	}
`;

function StepTracker({ active }) {
	return (
		<StepTrackerWrapper>
			{steps.map((step, idx) => (
				<div
					className={`${
						active === idx + 1
							? "active"
							: null
					} step`}
				>
					<span>{idx + 1}</span>
					{step.name}
				</div>
			))}
		</StepTrackerWrapper>
	);
}

export default function() {
	const [step, setStep] = React.useState(1);

	const getStepComponent = function() {
		console.log(steps[step-1])
		return steps[step-1].form;
	};

	const onNext = function(){
		return setStep(step+1)
	}

	return (
		<SignupPage>
			<AuthCard style={{ width: 600 }}>
				<h1>City Buddies</h1>
				<StepTracker active={step} />
				{ getStepComponent() }
				<div className="actions">
					<div className="col"></div>
					<div className="col">
						{step < steps.length ? (
							<DirectionButton onClick={onNext}>
								Next
								<FontAwesomeIcon icon="angle-right" />
							</DirectionButton>
						) : (
							<Button>
								Create Account
							</Button>
						)}
					</div>
				</div>
				<p>
					Already have an account ?{" "}
					<NavLink to="/login">Login</NavLink>
				</p>
			</AuthCard>
		</SignupPage>
	);
}
