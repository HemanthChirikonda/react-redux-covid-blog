import { connect } from 'react-redux'
import table_detaildashboardCoponent from '../Components/Table_detaildashboardCoponent'
import { loadALLStatesDatafromAPI } from '../redux/actions/actions'

const mapStatetoProps = (state) => {
    return { AllstatesData : state.AllstatesData }
}

const mapDispatchtoProps = (dispatch) => {
    return ({
        loadALLStatesData: () => {
            dispatch(loadALLStatesDatafromAPI());
        }
    })
}



const Table_detaildashboardContainer  = connect(mapStatetoProps, mapDispatchtoProps)(table_detaildashboardCoponent);


export default Table_detaildashboardContainer;