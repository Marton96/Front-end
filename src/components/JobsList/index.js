import React from 'react';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import MoreIcon from 'material-ui-icons/ExpandMore';

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



const JobsList = (props) => {


  console.log(props);
  const { classes } = props;

  const onDeleteButton = (id) => {
    props.onDelete(id)
  }

const onApplicationsButton =(id) => {
  props.onApplications(id);
}

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.jobs.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>
                <Button variant="raised">
                    <MoreIcon onClick={()=> onApplicationsButton(n.id)}/>
                  </Button>
                </TableCell>
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.description}</TableCell>
                <TableCell>{n.companyId}</TableCell>
                <TableCell>
                  <Button variant="fab" aria-label="delete">
                    <EditIcon onClick={() => props.onEdit(n)} />
                  </Button>
                  <Button variant="fab" aria-label="delete">
                    <DeleteIcon onClick={() => onDeleteButton(n.id)} />
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
export default withStyles(styles)(JobsList);