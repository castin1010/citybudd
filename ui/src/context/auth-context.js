import React,{useContext,createContext,useState,useLayoutEffect} from "react";
import { useAsync } from 'react-async'
import {bootstrapAppData} from '../utils/bootstrap'
import * as AuthClient from '../utils/auth-client'

export const AuthContext = createContext();

export function AuthProvider(props){
	const [ firstAttemptFinished,setFirstAttempFinished ] = useState(false)
	const { 
		data = {user:null},
		error,
		isRejected,
		isPending,
		isSettled,
		reload
	} = useAsync({
		promiseFn:bootstrapAppData
	})
	useLayoutEffect(() => {
		if(isSettled){
			setFirstAttempFinished(true)
		}
	},[isSettled])

	if(!firstAttemptFinished){
		if(isPending){
			return <div className='loading'></div>
		}
		if(isRejected){
			return (
				<div>
					<p>Uh...Oh! Something went wrong,try reloading the page</p>
					<pre>{error.message}</pre>
				</div>
			)
		}
	}

	const login = credentials => AuthClient.login(credentials).then(reload)
	const register = data => AuthClient.register(data).then(reload)
	const logout = () => {
		AuthClient.logout()
		window.location.reload()
	}

	return <AuthContext.Provider value={{data,login,register,logout}} {...props}/>
}

export function useAuth() {
	return useContext(AuthContext)
}

