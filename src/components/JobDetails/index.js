import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { connect } from 'react-redux';
import ApplyIcon from 'material-ui-icons/CheckCircle'

import * as jobActions from '../../actions/Job';

import Button from 'material-ui/Button';

import ApplicationDialog from '../../components/JobApplicationDialog'
import Chip from 'material-ui/Chip';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
   // display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});


class JobsPage extends React.Component {

  state = {
    dialogOpen: false,
  }

  onClose = () => {
    this.setState({
      dialogOpen: false,
    })
  };

  onApplication = () => {
    let userJob = {
      "jobId": this.props.match.params.number,
      "userId": localStorage.getItem('LOGGED_USER_ID'),
    };
    console.log("Ce trimiti?", userJob);
    this.props.applyForJob(userJob);
    this.setState({
      dialogOpen: true,
    })
  }

  componentDidMount() {
    this.props.hasAppliedtoJob(localStorage.getItem("LOGGED_USER_ID"), this.props.match.params.number);
    console.log("HELLO", this.props);
    this.props.getJobById(this.props.match.params.number);
  }



  render() {
    console.log(this.props.jobDetails)
    const { classes } = this.props;


    return (
      <div>
        <Paper>
          <br /> <br />  <br />  <br />  <br />
          <Typography variant="display1" gutterBottom>
            {this.props.jobDetails.name}
          </Typography>
          <br />     <br />
          <Typography variant="subheading" gutterBottom>
            {this.props.jobDetails.description}
          </Typography>
          <br />     <br />
          <Button onClick={this.onApplication} disabled={this.props.hasApplied }>
            <ApplyIcon /> Apply
            </Button>
          <br />     <br />
          <ApplicationDialog
            isOpen={this.state.dialogOpen}
            onClose={this.onClose}
          />
        </Paper>

        <Paper className={classes.root}>
          <Typography variant="display1" gutterBottom>
            {"Job Benefits"}
          </Typography>
          <br />
          <Typography>
            {this.props.jobDetails.jobBenefitInfoList ? this.props.jobDetails.jobBenefitInfoList.map(benefit => {
              return (
                <Chip
                  key={benefit.id}
                  label={benefit.name}
                  // onDelete={this.handleDelete(data)}
                  className={classes.chip}
                />
              );
            }) : null}
            </Typography>
        </Paper>

            <Paper>
              <Typography variant="display1" gutterBottom>
                {"Job Requirements"}
              </Typography>
              <br />
              <Typography>
                {this.props.jobDetails.jobRequirementInfoList ? this.props.jobDetails.jobRequirementInfoList.map(benefit => {
                  return (
                    <Chip
                      key={benefit.id}
                      label={benefit.name}
                      className={classes.chip}
                    />
                  );
                }) : null}
              </Typography>
            </Paper>
      </div>
          );
      
        }
      }
      
      
const mapDispatchToProps = (dispatch) => {
  return {
            getJobById: (id) => dispatch(jobActions.getJobById(id)),
          applyForJob: (value) => dispatch(jobActions.ApplyForJob(value)),
          hasAppliedtoJob: (userId, jobId) => dispatch(jobActions.hasAppliedtoJob(userId, jobId))
        };
      };
      
const mapStateToProps = (state) => ({
            jobDetails: state.job.jobDetails,
          hasApplied: state.job.hasApplied,
        });
        
        const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobsPage);
        
export default withStyles(styles)(withConnect);