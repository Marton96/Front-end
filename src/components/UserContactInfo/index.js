import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

import Email from 'material-ui-icons/Email';
import Phone from 'material-ui-icons/Phone';
import Address from 'material-ui-icons/LocationOn';
import City from 'material-ui-icons/LocationCity';
import Website from 'material-ui-icons/Laptop';
import Avatar from 'material-ui-icons/AccountBox';
import AvatarReal from 'material-ui/Avatar';

import { connect } from 'react-redux';
import * as adminActions from '../../actions/Admin';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    textField: {
        flexBasis: 200,
        marginTop: '2%',
    },
    bigAvatar: {
        width: 180,
        height: 180,
        padding: 100,
    },

});


class InputAdornments extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: props.contactInfo? props.contactInfo.email : '',
            phone: props.contactInfo? props.contactInfo.phone: '',
            address: props.contactInfo? props.contactInfo.address: '',
            city: props.contactInfo? props.contactInfo.city:'',
            website: props.contactInfo? props.contactInfo.website:'',
            avatarUrl: props.contactInfo? props.contactInfo.avatarUrl:'',
        }

        console.log(this.state, props)
    }

    componentWillReceiveProps(newProps) {
        if(newProps.contactInfo && newProps.contactInfo !== this.props.contactInfo) {
            this.setState({...newProps.contactInfo})
        }
        // else
        // this.setState({
        //     email: '',
        //     phone: '',
        //     address: '',
        //     city: '',
        //     website: '',
        //     avatarUrl: '',
        // })
    }

    onInputChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        console.log(this.state);
    };

    // componentDidMount() {
    //     this.props.getContactInfoById(localStorage.getItem("LOGGED_USER_CONTACT_ID"));

    // }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.row}>
                <form >
                    <AvatarReal
                        alt="Adelle Charles"
                        src={this.state.avatarUrl}
                        className={classes.bigAvatar}
                    />
                    <br />
                    <FormControl className={classes.textField}>
                        <InputLabel >Email</InputLabel>
                        <Input
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.onInputChange('email')}
                            startAdornment={<InputAdornment position="start">
                                <IconButton>
                                    <Email />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br />
                    <FormControl className={classes.textField}>
                        <InputLabel >Phone</InputLabel>
                        <Input
                            name="phone"
                            type="text"
                            value={this.state.phone}
                            onChange={this.onInputChange('phone')}
                            startAdornment={<InputAdornment position="start">
                                <IconButton>
                                    <Phone />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br />
                    <FormControl className={classes.textField}>
                        <InputLabel >Address</InputLabel>
                        <Input
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.onInputChange('address')}
                            startAdornment={<InputAdornment position="start">
                                <IconButton>
                                    <Address />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br />
                    <FormControl className={classes.textField}>
                        <InputLabel >City</InputLabel>
                        <Input
                            name="city"
                            type="text"
                            value={this.state.city}
                            onChange={this.onInputChange('city')}
                            startAdornment={<InputAdornment position="start">
                                <IconButton>
                                    <City />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br />
                    <FormControl className={classes.textField}>
                        <InputLabel >Website Url</InputLabel>
                        <Input
                            name="website"
                            type="text"
                            value={this.state.website}
                            onChange={this.onInputChange('website')}
                            startAdornment={<InputAdornment position="start">
                                <IconButton>
                                    <Website />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br />
                    <FormControl className={classes.textField}>
                        <InputLabel >Avatar Url</InputLabel>
                        <Input
                            name="avatarUrl"
                            type="text"
                            value={this.state.avatarUrl}
                            onChange={this.onInputChange('avatarUrl')}
                            startAdornment={<InputAdornment position="start">
                                <IconButton>
                                    <Avatar />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br /> <br />
                    <Button variant="raised" color="primary" className={classes.button}
                    onClick={()=>{ this.props.updateContact(localStorage.getItem("LOGGED_USER_CONTACT_ID"),this.state) }}
                    >
                        Save
                    </Button>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
     //   getContactInfoById: (id) => dispatch(adminActions.getContactsById(id)),
        updateContact: (id,value) => dispatch(adminActions.updateContact(id,value)),
    };
};

const mapStateToProps = (state) => ({
   // contactInfo: state.admin.contactInfo
});

InputAdornments.propTypes = {
    classes: PropTypes.object.isRequired,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(InputAdornments);
export default withStyles(styles)(withConnect);

