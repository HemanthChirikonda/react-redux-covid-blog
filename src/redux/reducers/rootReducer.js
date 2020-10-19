import { combineReducers } from 'redux'
import allstatesDataReducer from './allstatesDataREducer.';
import maindashboardReducer from './maindashboadReducer'
// import maindashboardREducer from './maindashboadReducer'

const rootReducer =  combineReducers ({
    MainDashboard:maindashboardReducer,
    AllstatesData:allstatesDataReducer
});


export default rootReducer;