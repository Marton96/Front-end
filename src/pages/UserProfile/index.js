import React from 'react';

import { connect } from 'react-redux';
import UserContactInfo from '../../components/UserContactInfo';
import UserEducation from '../../components/UserEducation';
import UserWorkExperience from '../../components/UserWorkExperience';
import UserSkills from '../../components/UserSkills';
import * as adminActions from '../../actions/Admin';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AddUserEducation from '../../components/AddUserEducation';
import AddUserWorkExperience from '../../components/AddUserWorkExperience';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class UserProfile extends React.Component {
    state={
        showAddEducation: false,
        showWorkExperience: false,
    }
    componentDidMount() {
    //   this.props.getContactInfoById(this.props.loggedInUserInfo.contactInfoId);
    //     console.log("CONTACT_INFO_ID",this.props.loggedInUserInfo.contactInfoId);
        this.props.getUserSkills(this.props.loggedInUserInfo.id);
        this.props.getAllUserInfo(this.props.loggedInUserInfo.id);

    }

    onAddEducationButton  = () =>{
        this.setState({
            showAddEducation: !this.state.showAddEducation,
        })
    } 

    onAddWorkExperienceButton  = () =>{
        this.setState({
            showWorkExperience: !this.state.showWorkExperience,
        })
    } 

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1>User Profile</h1>
                {this.props.userAllInfo ? 
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Paper className={classes.control}>
                            <UserContactInfo contactInfo={this.props.userAllInfo.contactInfo} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.control}>
                            <UserSkills userSkills={this.props.userSkills} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.control}>
                              { this.state.showAddEducation ? <AddUserEducation onCreateEducation={this.props.onAddUserEducation} userId={this.props.userAllInfo.id}/> : null } 
                             <UserEducation educationInfo={this.props.userAllInfo.userEducationInfoList} onDeleteUserEducation={this.props.onDeleteUserEducation} onAdd={this.onAddEducationButton} /> 
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.control}>
                            { this.state.showWorkExperience ? <AddUserWorkExperience onCreateWorkExperience={this.props.onAddWorkExperience} userId={this.props.userAllInfo.id}/> : null } 
                             <UserWorkExperience workInfo={this.props.userAllInfo.userWorkExperienceInfoList}  onDeleteUserWorkExperience={this.props. onDeleteUserWorkExperience} onAdd={this.onAddWorkExperienceButton}/>
                        </Paper>
                    </Grid>
                </Grid>
                : null}

            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(adminActions.getAllUsers()),
        onCreate: (user) => dispatch(adminActions.createUser(user)),
        onDelete: (id) => dispatch(adminActions.deleteUser(id)),
        onUpdate: (id, value) => dispatch(adminActions.updateUser(id, value)),
        getContactInfoById: (id) => dispatch(adminActions.getContactsById(id)),
        updateContact: (id,value) => dispatch(adminActions.updateContact(id,value)),
        getAllUserInfo: (id)=>dispatch(adminActions.getAllUserInfo(id)),
        onDeleteUserEducation: (value) => dispatch(adminActions.deleteUserEducation(value)),
        onDeleteUserWorkExperience: (value) => dispatch(adminActions.deleteUserWorkExperience(value)),
        onAddUserEducation: (value) => dispatch(adminActions.addUserEducation(value)),
        onAddWorkExperience: (value) => dispatch(adminActions.addWorkExperience(value)),
        getUserSkills: (id) => dispatch(adminActions.getUserSkills(id))
    };
};


const mapStateToProps = (state) => ({
    users: state.admin.userInfoList,
    contactInfo: state.admin.contactInfo,
    loggedInUserInfo: state.auth.loggedInUserInfo,
    userAllInfo: state.admin.userAllInfo,
    userSkills: state.admin.userSkills
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default withStyles(styles)(withConnect);