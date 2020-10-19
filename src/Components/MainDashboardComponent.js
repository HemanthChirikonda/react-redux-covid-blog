import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router'
import prototypes from 'prop-types'



const MainDashboardComponent = ({ MainDashboard, loadDashboard }) => {
    // const keys = Object.keys(MainDashboard);
    // const history = useHistory();
    useEffect(() => {
        console.log(loadDashboard());
        fub();
    }, []);

    const fub = () => {
        fetch('https://covid19.mathdro.id/api/confirmed').then(res => res.json()).then(data => { console.log(data.filter((item) => { if (item.countryRegion === 'India') { return item } })) }).catch(console.error)
    }


    const keys = Object.keys(MainDashboard);
    console.log('component', MainDashboard);
    return (<Fragment>
        <h1>{'Hello redux'} </h1>

        <div>
            {
                Object.keys(MainDashboard).map((key) => {
                    return (<div key={key}>
                        <p>{key}</p><p>{MainDashboard[key]}</p></div>)
                })
            }

        </div>
    </Fragment>)
}

MainDashboardComponent.prototypes = {
    MainDashboard: prototypes.objectOf(
        prototypes.shape({
            Confirmed: prototypes.number.isRequired,
            Active: prototypes.number.isRequired,
            Recovered: prototypes.number.isRequired,
            Deaths: prototypes.number.isRequired
        })
    )

}




export default MainDashboardComponent