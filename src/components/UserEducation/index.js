import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import * as moment from 'moment';

import Description from 'material-ui-icons/Description';
import School from 'material-ui-icons/School';
import AddIcon from 'material-ui-icons/Add';
import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete'

import { connect } from 'react-redux';
import * as adminActions from '../../actions/Admin';


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
    div: {
        flexDirection: 'rowReverse',
    }
});



class InputAdornments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    onInputChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    componentDidMount() {
         //this.props.getAllUserEducation(this.state.userInfoList.id);

    }

    onDeleteButton = (value) => {
        console.log("Asta sterg--->",value)
        this.props.onDeleteUserEducation(value);
    }

    render() {
        const { classes } = this.props;

        console.log("Education",this.props.educationInfo);

        return (
            <div >
                <Button onClick={() =>{this.props.onAdd()}} variant="fab" color="primary" aria-label="add" className={classes.button}>
                    <AddIcon />
                </Button>

                {/* {this.props.educationInfo ? this.props.educationInfo.map((e) => { */}
                {this.props.educationInfo ? this.props.educationInfo.map((e) => {

                    return (
                        <Card className={classes.card} >
                            <CardActions>
                                <div className={classes.div}>
                                    <IconButton onClick={() => {console.log("Value of e:",e); this.onDeleteButton(e)}} className={classes.button} aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </CardActions>
                            <CardContent>
                                <School />
                                <Typography variant="headline" component="h2">
                                    {e.institution}
                                </Typography>
                                <Typography component="h3">
                                    <br />
                                    <br />

                                    {e.description}
                                </Typography>
                                <br />
                                <Typography className={classes.pos}>
                                    {moment(e.startDate).format('l')} - {moment(e.endDate).format('l')}
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

        //getAllUserEducation: (id) => dispatch(adminActions.getAllUserEducation(id)),
    };
};

const mapStateToProps = (state) => ({
    //  userInfoList: state.auth.loggedInUserInfo,
    //  educationInfo: state.admin.educationInfo,
});

InputAdornments.propTypes = {
    classes: PropTypes.object.isRequired,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(InputAdornments);
export default withStyles(styles)(withConnect);

