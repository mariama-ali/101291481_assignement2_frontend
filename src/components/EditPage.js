import React, { Component } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            errors: {},
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        Axios.get(`/employees/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    firstName: res.data.employee.firstName,
                    lastName: res.data.employee.lastName,
                    emailId: res.data.employee.emailId,
                });
            }
        });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { firstName, lastName, emailId } = this.state;
        const data = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
        };
        console.log(data);
        Axios.put(`/api/v1/edit-employees/${id}`, data).then((res) => {
            if (res.data.success) {
                console.log("Edited successfully");
            }
        });

    };

    render() {
        return (
            <div className="py-5 container">
                <br />
                <form onClick={this.onSubmit} >
                    <fieldset>
                        <br />
                        <legend className="text-center fontP">Edit Employee</legend>
                        <hr />
                        <div className="spacing form-group">
                            <lable class=" form-label fontP ">First Name </lable>
                            <input type="text" className="spacing form-control" name='firstName' value={this.state.firstName} onChange={this.handleInputChange} />
                        </div>
                        <div className="spacing form-group">
                            <lable class=" form-label  fontP ">Last Name </lable>
                            <input type="text" className="spacing form-control" name='lastName' value={this.state.lastName} onChange={this.handleInputChange} />
                        </div>
                        <div className="spacing form-group">
                            <lable class="form-label fontP">Email </lable>
                            <input type="email" className=" spacing form-control" name='emailId' value={this.state.emailId} onChange={this.handleInputChange} />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div class="text-center">
                            <Link type="submit" className=" btn btn-outline-primary m-2 fontP" to="/">Save</Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default EditPage;