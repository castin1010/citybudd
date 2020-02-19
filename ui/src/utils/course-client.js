import client from "./api-client";
import { course_outline_key } from "../constants";
import { saveToLocalStorage } from './local-storage'

export function get_course_outline(){
	return client('api/courses/')
		.then(res => {
			saveToLocalStorage(course_outline_key,res.data)
		})
		.catch(err => console.log(err))
}
