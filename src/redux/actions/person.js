import {ADD_PERSON} from '../constant'

export const addPersonAction =  personObj =>({type:ADD_PERSON,data:personObj})

console.log('person');