import React,{ createContext,useContext } from 'react'

const CourseContext = createContext()

function CourseProvider(){
	return <CourseContext.Provider value={{data:'me'}}/>
}

function useCourse(){
	return useContext(CourseContext)
}

export {
	CourseProvider,
	useCourse
}
