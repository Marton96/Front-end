import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


export default class FormDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          open={this.props.openned}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please complet the fields:
            </DialogContentText>
            <TextField
              defaultValue={this.props.userData ? this.props.userData.firstName : ''}
              autoFocus
              margin="dense"
              id="fname"
              label="First Name"
              fullWidth
              onChange={(e) => this.props.userData.firstName = e.target.value}
            />
            <TextField
              defaultValue={this.props.userData ? this.props.userData.lastName : ''}
              autoFocus
              margin="dense"
              id="lname"
              label="Last Name"
              fullWidth
              onChange={(e) => this.props.userData.lastName = e.target.value}
            />
            <TextField
              defaultValue={this.props.userData ? this.props.userData.username : ''}
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              fullWidth
              onChange={(e) => this.props.userData.username = e.target.value}

            />
            {/* <TextField
              defaultValue={this.props.userData ? this.props.userData.password : ''}
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              fullWidth
              onChange={(e) => this.props.userData.password = e.target.value}
            /> */}
            <TextField
              autoFocus
              defaultValue={this.props.userData ? `${this.props.userData.userRoleId}` : ''}
              margin="dense"
              id="name"
              label="User Role Id"
              fullWidth
              onChange={(e) => this.props.userData.userRoleId = e.target.value}

            />

          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.onSave(this.props.userData)} color="primary">
              Save
            </Button>
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}