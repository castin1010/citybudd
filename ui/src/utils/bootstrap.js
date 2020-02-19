import { getUser } from './auth-client'

async function bootstrapAppData(){
	const data = await getUser();
	if(!data){
		return {user:null}
	}
	console.log(data)
	return {
		user:data
	}
}

export { bootstrapAppData }
