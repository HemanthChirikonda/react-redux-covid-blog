import { GET_MAIN_DASHBOARD } from "../actionTypes/actionTypes"
import {defaultState} from '../defaultState/defaultState'

/*
action ={
    type:GET_MAIN_DASHBOARD
    MainDashboard:{} 
}
*/

const maindashboardReducer = (prevState = defaultState.MainDashboard, action) => {
         
    switch (action.type) {
        case GET_MAIN_DASHBOARD:
            console.log('state',action.MainDashboard);
             return action.MainDashboard
        default:
            return prevState;
    }
}

export default maindashboardReducer;