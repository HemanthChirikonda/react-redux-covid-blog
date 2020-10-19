import { GET_ALL_STATES_DATA } from "../actionTypes/actionTypes"
import {defaultState} from '../defaultState/defaultState'

/*
action ={
    type:GET_ALL_STATES_DATA
    states:[]
}
*/

const allstatesDataReducer = (prevState = defaultState.AllstatesData, action) => {
         
    switch (action.type) {
        case GET_ALL_STATES_DATA:
            console.log('state',action.states);
             return action.AllstatesData
        default:
            return prevState;
    }
}

export default allstatesDataReducer;