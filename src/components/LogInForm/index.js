import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import * as authActions from '../../actions/Authorization';


class LogInForm extends Component{

    state ={
        username:'',
        password:'',
    };

    onInputChange = (event) => {
        console.log(this.state);
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };

    onLoginSubmit = (event) => {
        event.preventDefault();
        this.props.initLoginFlow(this.state);
        console.log(localStorage.getItem("JOBS_PROJECT_USER_INFO"))
    };



    render(){
        return (
            <div>
            <form  >
            <TextField
                name = "username"
                label="Username"
                margin="normal"
                value={this.state.username}
                onChange={this.onInputChange}
             />
             <br/>
             <TextField
                name="password"
                label="Password"
                type="password"
                margin="normal"
                value={this.state.password}
                onChange={this.onInputChange}
             />
             <br/>
             <Button onClick={this.onLoginSubmit} variant="raised" color="primary"  >
                SIGN IN
             </Button>

             </form>
             </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoginFlow: (value) => dispatch(authActions.initLogin(value)),
    };
  };
  
const withConnect = connect(null, mapDispatchToProps)(LogInForm);

export default withConnect;