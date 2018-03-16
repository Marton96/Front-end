import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import * as adminActions from '../../actions/Admin';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';

class RegistrationForm extends React.Component{
    state = {
        firstName:'',
        lastName:'',
        username:'',
        password: '',
        userRoleId: 3,
        open: false
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
        this.props.history.push("/");
      };

    change = e =>{
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () =>{
        
        console.log(this.state);
    }

    createUser = () => {
        this.handleClickOpen();
        this.props.onCreate(this.state);
        console.log(this.state);

    }

  
    render(){
        return (
            <form  noValidate autoComplete="off">
             <TextField
                 required
                id="firstName"
                label="First Name"
                margin="normal"
                onChange={(e) => this.setState({firstName : e.target.value})}
             />
             <br/>
             <TextField
              required
                id="lastName"
                label="Last Name"cxz
                margin="normal"
                onChange={(e) => this.setState({lastName : e.target.value})}

             />
             <br/>

            <TextField
             required
                id="username"
                label="Username"
                margin="normal"
                onChange={(e) => this.setState({username : e.target.value})}

             />
             <br/>
             <TextField
              required
                id="password"
                label="Password"
                type="password"
                margin="normal"
                onChange={(e) => this.setState({password: e.target.value})}

             />
             <br/>
             <Button onClick={this.createUser}  variant="raised" color="primary"  >
                REGISTER
             </Button>
             <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"You have successfully registered!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Now, you have to log in! :)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>

             </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: (user) => dispatch(adminActions.createUser(user)),
    };
};


const withConnect = connect(null, mapDispatchToProps)(RegistrationForm);

export default withConnect;