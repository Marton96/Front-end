import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import HomeIcon from 'material-ui-icons/Home';
import Input from 'material-ui-icons/Input';
import Work from 'material-ui-icons/Work';
import { Link } from 'react-router-dom';
import Account from 'material-ui-icons/AccountCircle';
import { connect } from 'react-redux';
import { onLogout } from '../../actions/Authorization';
import Job from 'material-ui-icons/Search';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logoutIcon: {
    transform: 'rotate(180deg)',
  },

};


function ButtonAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Button component={Link} to="/" className={classes.button} size="small" color="inherit">
            <HomeIcon className={classes.leftIcon} />
            HOME
          </Button>

          <Typography variant="title" color="inherit" className={classes.flex}>
          </Typography>

          <div hidden={props.isLoggedIn}>
            <Button  component={Link} to="/register" color="inherit">REGISTER</Button>
          </div>

          <div
            hidden={!props.isLoggedIn || props.loggedInUserInfo.userRoleId !== 3}
          >
            <Button component={Link} to="/user" color="inherit" >
               <Job/> See all jobs
            </Button>
          </div>

          <div
            hidden={!props.isLoggedIn || props.loggedInUserInfo.userRoleId !== 3}
          >
            <Button component={Link} to="/user/edit" color="inherit" >
               <Account/> My profile
            </Button>
          </div>

          <div
            hidden={!props.isLoggedIn || props.loggedInUserInfo.userRoleId !== 3}
          >
            <Button component={Link} to="/user/applications" color="inherit" >
              <Work />  My Applications
            </Button>
          </div>

          <div hidden={!props.isLoggedIn}>
            <Button component={Link} to="/" onClick={props.onLogoutFromProps} color="inherit" >
              <Input className={classes.logoutIcon} /> Log Out
            </Button>
          </div>
          <div hidden={props.isLoggedIn}>
            <Button component={Link} to="/login" color="inherit">
              <Input /> Log In
            </Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLogoutFromProps: () => dispatch(onLogout()),
});

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  loggedInUserInfo: state.auth.loggedInUserInfo,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);

export default withStyles(styles)(withConnect);