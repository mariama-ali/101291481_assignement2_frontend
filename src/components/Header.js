import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link class="navbar-brand fontHeader" to="/">Employee Managment System</Link>
                        <Link class="navbar-brand fontHeader" to="/">Go Back</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;