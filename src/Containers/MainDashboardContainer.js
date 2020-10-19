import { connect } from 'react-redux'
import MainDashboardComponent from '../Components/MainDashboardComponent'
import { load_DashboardFromApi } from '../redux/actions/actions'

const mapStatetoProps = (state) => {
    return { MainDashboard: state.MainDashboard }
}

const mapDispatchtoProps = (dispatch) => {
    return ({
        loadboard: () => {
            dispatch(load_DashboardFromApi());
        }
    })
}

const MainDashboardContainer = connect(mapStatetoProps, mapDispatchtoProps)(MainDashboardComponent);


export default MainDashboardContainer;