import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE
} from '../constants/employee.constant';
/**
 * add an emp
 * @param {*} employee 
 */
export function addEmployee(name, employees) {
    console.log('action addEmployee...............');
    let num = employees.length;
    //get id
    let id = num > 0 ? employees[num - 1].id + 1 : 0;
    //create new emp
    let employee = {
        id: id,
        name: name
    }
    return {
        type: 'ADD_EMPLOYEE',
        employee
    };
}
/**
 * delete an emp by id
 * @param {*} id 
 */
export function deleteEmployee(id) {
    return {
        type: 'DELETE_EMPLOYEE',
        id
    };
}