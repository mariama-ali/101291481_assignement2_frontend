import React, { Component } from 'react';
import axios from "axios";
import '../app.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state={
      employees:[],
    };
  }
  componentDidMount(){
    this.getEmployees();
  }
  getEmployees(){
    axios.get("/api/v1/employees").then(res=>{
      if(res.data.success){
        this.setState({
          employees:res.data.employees,
        });
        console.log(this.state.employees);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`/api/v1/delete-employees/${id}`).then((res) => {
      this.getEmployees();
    });
  };
  render() {
    return (
      <div>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-6 mx-auto">
              <h1 className="display-4 fontHeader">Employee List</h1>
              <br/>
              <hr/>
              <br/>
              <p>
                <Link to="/api/v1/add-employees" className="btn btn-outline-dark fontHeader my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                  </svg> Add New Employee</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="container">
          <table className="table table-sm fontHeader center">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((emp, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.emailId}</td>
                  <td>
                    <Link className="btn btn-outline-dark my-2" to={`/api/v1/edit-employees/${emp._id}`}>
                      <i className="fas- fa-edit"></i> Edit
                    </Link>
                    &nbsp;
                    <a className="btn btn-outline-dark my-2"onClick={() => this.onDelete(emp._id)}>
                      <i class="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                    &nbsp;
                    <Link className="btn btn-outline-dark my-2" to={`/view-employees/${emp._id}`}>
                      <i className="far fa-times-circle"></i> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default LandingPage;