import React from 'react';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';




const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});



const UsersList = (props) => {



  const onDeleteButton = (id) => {
    props.onDelete(id)
  }


  return (
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>User Role ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.userRoleId}</TableCell>
                <TableCell>
                  {/* <Button variant="fab" color="primary" aria-label="edit">
                  <Icon>edit_icon</Icon>  
                  </Button>   */}
                  {/* <DialogBox  userData={n} onClick={onUpdateButton} />   */}
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
                  <Button variant="fab" aria-label="delete">
                    <EditIcon onClick={() => props.onEdit(user)}/>
                  </Button>

                  <Button variant="fab" aria-label="delete">
                    <DeleteIcon onClick={() => onDeleteButton(user.id)}/>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(UsersList);

