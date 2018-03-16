import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete'
import Icon from 'material-ui/Icon';


import Work from 'material-ui-icons/AccountBalance';

import { connect } from 'react-redux';
import * as adminActions from '../../actions/Admin';
import * as moment from 'moment';
import Typography from 'material-ui/Typography';



const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
});



class InputAdornments extends React.Component {
    state = {

    };

    onInputChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    componentDidMount() {

     //   this.props.getAllUserWorkExperience(this.props.userInfoList.id);
    }

    onDeleteButton = (value) => {
        console.log("Asta sterg--->",value)
        this.props.onDeleteUserWorkExperience(value);
    }

    render() {
        const { classes } = this.props;


        return (
            <div>
                <Button onClick={() =>{this.props.onAdd()}}variant="fab" color="primary" aria-label="add" className={classes.button}>
                    <AddIcon />
                </Button>

                {this.props.workInfo ? this.props.workInfo.map((w) => {
                    return (
                        <Card className={classes.card} >
                            <CardActions>
                                <IconButton onClick={() => {console.log("Value of e:",w); this.onDeleteButton(w)}}className={classes.button} aria-label="Delete">
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                            <CardContent>
                                <Work />
                                <Typography variant="headline" component="h2">
                                    {w.institution}
                                </Typography>
                                <Typography component="h3">
                                    <br />
                                    <br />

                                    {w.description}
                                </Typography>
                                <br />
                                <Typography className={classes.pos}>
                                    {moment(w.startDate).format('l')} - {moment(w.endDate).format('l')}
                                </Typography>
                            </CardContent>

                        </Card>
                    )
                }) : null}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

      //  getAllUserWorkExperience: (id) => dispatch(adminActions.getAllUserWorkExperience(id)),
    };
};

const mapStateToProps = (state) => ({
  //  userInfoList: state.auth.loggedInUserInfo,
  // workInfo: state.admin.workInfo,
});

InputAdornments.propTypes = {
    classes: PropTypes.object.isRequired,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(InputAdornments);
export default withStyles(styles)(withConnect);

