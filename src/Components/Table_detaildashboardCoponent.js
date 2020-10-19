import React, { Fragment, useEffect } from 'react'
import prototypes from 'prop-types'



const Table_detaildashboard = ({ AllstatesData, loadALLStatesData }) => {
 
    useEffect(()=>{
        loadALLStatesData();
    },[]);
    return (<Fragment>
        <table className={'table'}>

            <thead>
                <tr>
                    <th scope="col">{'State/UT'}</th>
                    <th scope="col">{'Comformed'}</th>
                    <th scope="col">{'Active'}</th>
                    <th scope="col">{'Recovered'}</th>
                    <th scope="col">{'Dethes'}</th>
                </tr>
            </thead>
            <tbody>
                {AllstatesData?.map((state) => {
                    return (<tr>
                        <th scope="row">{state.provinceState}</th>
                        <td>{state.confirmed}</td>
                        <td>{state.active}</td>
                        <td>{state.recovered}</td>
                        <td>{state.deaths}</td>
                    </tr>)
                })
                }
            </tbody>
        </table>
    </Fragment>)
}

Table_detaildashboard.prototypes={
AllstatesData:prototypes.arrayOf({
    0:prototypes.object.isRequireds
}),
LoadData:prototypes.func.isRequired
}



export default Table_detaildashboard;