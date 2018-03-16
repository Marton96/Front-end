import React, { Component } from 'react';
import Switch from '../../components/ConnectedSwitch';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../../components/Home'
import LogInForm from '../../components/LogInForm'
import AdminPage from '../../pages/AdminPage'
import Toolbar from '../../components/AppBar';
import CompanyPage from '../../pages/CompanyPage';
import UserPage from '../../pages/UserPage';
import JobPage from '../../pages/JobPage';
import JobDetails from '../../components/JobDetails';
import UserJobApplications from '../../pages/UserJobsApplications';
import CompanyJobApplications from '../../pages/CompanyJobApplications';
import UserProfile from '../../pages/UserProfile'
import Registration from '../../pages/RegistrationPage'
import Test from '../test';
 class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <Toolbar />
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogInForm}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/register" component={Registration}/>
          <Route exact path="/admin/users" component={AdminPage}/>
          <Route exact path="/company/companies" component={CompanyPage}/>
          <Route exact path='/user' component={UserPage}/>
          <Route exact path='/company/jobs/:number' component={JobPage}/>
          <Route exact path='/user/jobs/:number' component={JobDetails}/>
          <Route exact path='/user/applications' component={UserJobApplications}/>
          <Route exact path='/company/jobs/applications/:number' component={CompanyJobApplications}/>
          { this.props.loggedInUserInfo && this.props.loggedInUserInfo.userRoleId === 3 ? <Route exact path='/user/edit' component={UserProfile}/> : null } 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUserInfo: state.auth.loggedInUserInfo
});

export default withRouter(connect(mapStateToProps ,null) (Layout));

// 1. connectez layout la redux
// am access la loggedInUserInfo
// { this.porps.loggedInUserInfo && this.props.loggedInUserInfo.userRoleId === 2,3,1 ? <Route exact path='/user/edit' component={UserProfile}/> : null }