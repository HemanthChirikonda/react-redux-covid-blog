import { GET_MAIN_DASHBOARD } from '../actionTypes/actionTypes'
import { GET_ALL_STATES_DATA } from '../actionTypes/actionTypes'

export const load_DashboardFromApi = () => {
    return (dispatch) => {
        fetch('https://covid19.mathdro.id/api')
            .then((res) => res.json())
            .then(data => {

                dispatch(loadDashboard({
                    Confirmed: data.confirmed.value,
                    Active: data.confirmed.value - (data.recovered.value + data.deaths.value),
                    Recovered: data.recovered.value,
                    Deaths: data.deaths.value
                }))
            }).catch(console.er)
    }
}

export const loadDashboard = (dashboard) => {
    return {
        type: GET_MAIN_DASHBOARD,
        MainDashboard: dashboard
    }

};

export const loadALLStatesDatafromAPI = () => {
    return (dispatch) => {
        fetch('https://covid19.mathdro.id/api/confirmed')
            .then(res => res.json())
            .then(data => {
                dispatch(loadALLStatesData((data.filter((item) => {
                    if (item.countryRegion === 'India') {
                        return item
                    }
                }))))
            })
            .catch(console.error)
    }
}


export const loadALLStatesData = (data) => {
    return {
        type: GET_ALL_STATES_DATA,
        AllstatesData: data
    }
}