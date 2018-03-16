import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { onAppInit } from './actions/Authorization';
import Layout from './pages/Layout'

class App extends Component {
  componentDidMount(){
    this.props.onAppInit();
  }
  render() {
    return (
      <div className="App">
        <Layout/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAppInit: () => dispatch(onAppInit()),
});

export default withRouter(connect (null,mapDispatchToProps) (App));
