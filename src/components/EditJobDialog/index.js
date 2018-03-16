import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Switch from 'material-ui/Switch';


export default class EditJobDialog extends React.Component {
  render() {
    return (
      <div>
        {this.props.jobData ? 
        <Dialog
          open={this.props.openned}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Job</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please complet the fields:
            </DialogContentText>
            <TextField
              defaultValue={this.props.jobData ? this.props.jobData.name : ''}
              autoFocus
              margin="dense"
              id="name"
              label="Job Name"
              fullWidth
              onChange={(e) => this.props.jobData.name = e.target.value}
            />
            <TextField
              defaultValue={this.props.jobData ? this.props.jobData.description : ''}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              onChange={(e) => this.props.jobData.description = e.target.value}
            />
             <DialogContentText>
               Availability:
            </DialogContentText>
              <Switch checked={ this.props.jobData.isAvailable ? true  : false  } onChange={(event)=> {this.props.jobData.isAvailable = this.props.jobData.isAvailable ? false : true; this.props.onSave2(this.props.jobData)}}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.onSave(this.props.jobData)} color="primary">
              Save
            </Button>
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>: null}
      </div>
    );
  }
}