// Save to window.localStorage

function saveToLocalStorage(key,value){
	return window.localStorage.setItem(key,value);
}

function getFromLocalStorage(key){
	return window.localStorage.getItem(key)
}

function removeFromLocalStorage(item){
	return window.localStorage.removeItem(item)
}

export {
	saveToLocalStorage,
	getFromLocalStorage,
	removeFromLocalStorage
}
