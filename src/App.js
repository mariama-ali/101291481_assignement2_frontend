import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EditPage from './components/EditPage';
import ViewPage from './components/ViewPage';
import CreatePage from './components/CreatePage';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="containter">
          <Header />
          <Route path="/"  exact component={LandingPage} />
          <Route path="/api/v1/add-employees" component={CreatePage} /> 
          <Route path="/api/v1/edit-employees/:id" component={EditPage} /> 
          <Route path="/view-employees/:id" component={ViewPage} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;