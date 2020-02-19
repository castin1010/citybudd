import React from 'react'
import { useAuth } from './auth-context'

export const UserContext = React.createContext()

export function UserProvider(props){
	const {data:{user}} = useAuth()
	return <UserContext.Provider value={user} {...props}/>
}

export function useUser(){
	return React.useContext(UserContext)
}


