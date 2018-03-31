import {
    combineReducers
} from 'redux'
import employeeReducer from './employee.reducer'
/**
 * combine reducers for creating store
 */
const rootReducer = combineReducers({
    employeeReducer
})

export default rootReducer