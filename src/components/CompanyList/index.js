import React from 'react';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import { withRouter } from 'react-router-dom'
import EditIcon from 'material-ui-icons/Edit';
import MoreHoriz from 'material-ui-icons/MoreHoriz'

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



const CompanyList = (props) => {

    const { classes } = props;

    const onDeleteButton = (id) => {
        props.onDelete(id)
    }

    //   const onUpdateButton = (id, value) => {
    //     props.onUpdate(id, value);
    //   }

    //   const redirect = (id) => {
    //     localStorage.setItem("companyId",id);
    //     console.log(localStorage.getItem("companyId"));
    //     const rout= props.history;
    //     rout.push(`/company/jobs/${id}`);
    //   }

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>User ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.companies.map(n => {

                        return (
                            <TableRow key={n.id}>
                                <TableCell>
                                    <Button>
                                        <MoreHoriz onClick={() => props.onRedirect(n.id)} />
                                    </Button>
                                </TableCell>
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.userId}</TableCell>
                                <TableCell>
                                    <Button variant="fab" aria-label="edit">
                                        <EditIcon onClick={() => props.onEdit(n)} />
                                    </Button>
                                    <Button variant="fab" aria-label="delete" className={classes.button}>
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
export default withStyles(styles)(withRouter(CompanyList));

