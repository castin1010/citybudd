import React, { createContext,useContext } from 'react'

const RegistrationFormContext = createContext()

function RegistrationFormProvider(){
	return <RegistrationFormContext.Provider value={{name:''}}/>
}

function useRegistrationForm(){
	return useContext(RegistrationFormContext)
}

export {
	RegistrationFormProvider,
	useRegistrationForm
}
