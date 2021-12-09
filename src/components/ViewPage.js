import React, { Component } from "react";
import axios from "axios";
class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        axios.get(`/employees/${id}`).then(res => {
            this.setState({
                employee: res.data.employee,
            });
            console.log(this.state.employee);
        });
    }
    render() {
        const {firstName, lastName, emailId} = this.state.employee
        return (
            <div className="py-5 text-center container">
                <h4 className="fontHeader">View Employee Details</h4>'
                <hr/>
                <dl className="row">
                <dt className="fontHeader">FirstName: </dt>
                <dd className="fontHeader">{firstName}</dd>
                <dt className="fontHeader">LastName:</dt>
                <dd className="fontHeader">{lastName}</dd>
                <dt className="fontHeader">Email:</dt>
                <dd className="fontHeader">{emailId}</dd>
                </dl>
            </div>
        );
    }
}
export default ViewPage;