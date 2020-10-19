import React, { Fragment } from 'react'
// import MainDashboardComponent from './Components/MainDashboardComponent'
import {defaultState} from "./redux/defaultState/defaultState"
import MainDashboardContainer from './Containers/MainDashboardContainer'
import Table_detaildashboardContainer from './Containers/Table_detaildashboardContainer'
 
const App=()=>{
    console.log(defaultState)
    return (
        <Fragment>
            {/* <h1>{'Dashboard'}</h1> */}
            <MainDashboardContainer />
            <Table_detaildashboardContainer/>
            {/* <Table_detaildashboard/> */}
            {/* <MainDashboardComponent MainDashboard={defaultState.MainDashboard}/> */}
           
        </Fragment>
    )
}

export default App;