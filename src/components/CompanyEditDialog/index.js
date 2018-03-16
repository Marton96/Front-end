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
          <DialogTitle id="form-dialog-title">Edit Company</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please complet the field:
            </DialogContentText>
            <TextField
              defaultValue={this.props.companyData ? this.props.companyData.name : ''}
              autoFocus
              margin="dense"
              id="name"
              label="Company Name"
              fullWidth
              onChange={(e) => this.props.companyData.name = e.target.value}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.onSave(this.props.companyData)} color="primary">
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