import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

const DialogBox = (props) => {
    return(
      <div>
    <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
    >
        <DialogTitle id="form-dialog-title">Good luck!</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Your application has been sent successfully!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.onClose} color="primary">
                OK
            </Button>
        </DialogActions>
    </Dialog>
      </div >
    );
  

};

export default DialogBox; 