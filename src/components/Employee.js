import React,
{
    Component,
} from 'react';
import {
    connect
} from 'react-redux';
import {
    addEmployee,
    deleteEmployee
} from '../redux/actions/employee.action';
import {
    StyleSheet,
    Text,
    Button,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
import commonStyles, { constant } from '../styles/common';
import employeeStyles from '../styles/employee.styles'

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    addEmployee = () => {
        console.log('view button triggered................');
        //return, if no input
        let text = this.state.text.trim();
        if (text === '') {
            this.setState({ text: '' });
            return
        };
        this.props.dispatchAddEmployee(
            name = text,
            employees = this.props.employees
        );
        this.setState({ text: '' });
    }
    deleteEmployee = (id) => {
        this.props.dispatchDeleteEmployee(id);
    }
    render() {
        return (
            <View style={commonStyles.container}>
                <Text style={commonStyles.title}>Employee</Text>
                <View style={commonStyles.rowFlexBox}>
                    <TextInput
                        style={employeeStyles.input}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder="Employee Name"
                    />
                    <TouchableHighlight
                        underlayColor={constant.underlayColor}
                        style={[commonStyles.button, employeeStyles.button, employeeStyles.addButton]}
                        onPress={this.addEmployee}
                    >
                        <Text>Add</Text>
                    </TouchableHighlight>
                </View>
                {
                    this.props.employees.map((employee, index) => (
                        <View key={index} style={[commonStyles.rowFlexBox, employeeStyles.employee]}>
                            <Text style={employeeStyles.employeeName} >{employee.name}</Text>
                            <TouchableHighlight
                                underlayColor={constant.underlayColor}
                                style={[commonStyles.button, employeeStyles.button, employeeStyles.deleteButton]}
                                onPress={() => this.deleteEmployee(employee.id)}
                            >
                                <Text>Delete</Text>
                            </TouchableHighlight>
                        </View>
                    ))
                }
            </View>
        )
    }
}

/**
 * inject state nodes to props of relative components
 * @param {*} state 
 */
function mapStateToProps(state) {
    console.log('mapStateToProps mapping.......')
    console.log(state)
    return {
        employees: state.employeeReducer.employees
    }
}
/**
 * inject binded actions to props
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return {
        dispatchAddEmployee: (name, employees) => {
            console.log('mapDispatchToProps dispathcing.......'),
                dispatch(addEmployee(name, employees))
        },
        dispatchDeleteEmployee: (id) => {
            dispatch(deleteEmployee(id))
        }
    }
}
/**
 * connect view with store
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employee)