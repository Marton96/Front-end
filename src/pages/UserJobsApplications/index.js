import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import { connect } from 'react-redux';

import * as jobActions from '../../actions/Job';
import Card, { CardActions, CardContent } from 'material-ui/Card';



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
  pos: {
      marginBottom: 12,
      color: theme.palette.text.secondary,
  },

});

class JobsPage extends React.Component {


  componentDidMount() {
    console.log("Ajungi aici:", localStorage.getItem("LOGGED_USER_ID"));

    this.props.getUserJobApplications(localStorage.getItem("LOGGED_USER_ID"));

  }

  render() {


    return (
      <div>
        <Paper>
          <br /> <br />  <br />  <br />  <br />
          <Typography variant="display1" gutterBottom>
            Application Page
            {console.log(this.props.userJobApplications)}


          </Typography>
          <Grid container spacing={24}>
            {this.props.userJobApplications ? this.props.userJobApplications.map((c) => {
              return (
                <Grid item xs={4} key={c.id}>
                  <Card  >
                    <CardContent>
                      <Typography>{}
                      </Typography>
                      <Typography variant="headline" component="h2">
                        {c.jobInfo.companyInfo.name}
                      </Typography>
                      <Typography ><br />
                      {c.jobInfo.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Grid>
              )
            }) : null}
          </Grid>
        </Paper>
      </div>
    );

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getUserJobApplications: (id) => dispatch(jobActions.getUserJobApplications(id)),
    // getInfoJob: (id) => dispatch(jobActions.getJobById(id)),
    // getInfoCompany: (id) => dispatch(jobActions.getJobsByCompany(id))
  };
};

const mapStateToProps = (state) => ({
  userJobApplications: state.job.userJobApplications,
  // jobByCompanyInfoList: state.job.jobByCompanyInfoList,
  // jobDetails: state.job.jobDetails,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobsPage);

export default withStyles(styles)(withConnect);