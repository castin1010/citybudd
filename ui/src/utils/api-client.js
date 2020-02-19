import axios from "axios";

const localStorageKey = '_citybuddies_auth_token_'

export default function(endpoint,body) {
	const token = window.localStorage.getItem(localStorageKey);
	const headers = {};

	if (token) {
		headers.Authorization = `Token ${token}`;
	}

	const config = {
		headers: {...headers}
	}

	if(body){
		return axios.post(`/api/${endpoint}`, body, config)
	}
	return axios.get(`/api/${endpoint}`, config)
		
}
