import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE
} from '../constants/employee.constant';
/**
 * initialise an employee object
 */
let employee = {
    id: 0,
    name: 'Frank'
}
/**
 * initialise state with a collection
 */
const initState = { employees: [employee] }
/**
 * for handling emp related actions
 * @param {f} state 
 * @param {*} action 
 */
export default function employeeReducer(state = initState, action) {
    switch (action.type) {
        //if action is for adding emp
        case ADD_EMPLOYEE:
            console.log('reducer ADD_EMPLOYEE.............');
            return {
                ...state,
                //put previous emp and newly added emp to collection
                employees: [...state.employees, action.employee],
            };
        //if action is for deleting emp
        case DELETE_EMPLOYEE:
            return {
                ...state,
                //exclude emp with input id from collection
                employees: state.employees.filter(employee => employee.id !== action.id),
            };
        default:
            return state;
    }
}