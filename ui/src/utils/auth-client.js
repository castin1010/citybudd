import client from "./api-client";
import { auth_token_key, current_user_key } from "../constants";
import { saveToLocalStorage,getFromLocalStorage,removeFromLocalStorage } from './local-storage.js'

function handleAuthResponse({ data: { auth_token } }) {
	return saveToLocalStorage(auth_token_key,auth_token)
}

function saveCurrentUser({ data }) {
	return saveToLocalStorage(current_user_key,JSON.stringify(data))
}

export function getUser() {
	// Get currently logged in user
	const saved_user = getFromLocalStorage(current_user_key)
	if(saved_user){
		return JSON.parse(saved_user)
	}
	return client("auth/users/me/")
		.then(saveCurrentUser)
		.catch(err => logout()); // if server responds with anything other than 200 logout the user
}

export function login(credentials) {
	return client("auth/token/login/", credentials).then(
		handleAuthResponse
	);
}

export function register(data) {
	return client("auth/users/", { body: { ...data } }).then(
		handleAuthResponse
	);
}

export function logout() {
	return removeFromLocalStorage(current_user_key)
}

export function getToken() {
	return getFromLocalStorage(auth_token_key)
}
