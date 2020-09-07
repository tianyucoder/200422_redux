//引入常量，避免写错action名字
import {ADD_PERSON} from '../constant'
//创建添加一个人的action
export const addPersonAction =  personObj =>({type:ADD_PERSON,data:personObj})