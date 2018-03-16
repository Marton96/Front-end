import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { connect } from 'react-redux';
import * as jobActions from '../../actions/Job';
import JobBenefits from '../../components/JobBenefits';
import JobRequirements from '../../components/JobRequirements';

class CompanyJobsPage extends React.Component {


  componentDidMount() {
    // console.log("ID: ......",this.props.match.params.number);
      this.props.getJobBenefitsForSpecificJob(this.props.match.params.number);
      this.props.getJobRequirementsForSpecificJob(this.props.match.params.number);
  }

  render() {


    return (
      <div>
        <Paper>
          <br /> <br />  <br />  <br />  <br />
          <Typography variant="display1" gutterBottom>
           Company Application Page
          </Typography>
          <JobBenefits benefits={this.props.jobBenefits}/>
          <JobRequirements requirements={this.props.jobRequirements} />
        </Paper>
      </div>
    );

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getJobBenefitsForSpecificJob: (id) => dispatch(jobActions.getJobBenefitsForSpecificJob(id)),
      getJobRequirementsForSpecificJob: (id) => dispatch(jobActions.getJobRequirementsForSpecificJob(id)),
  };
};

const mapStateToProps = (state) => ({
  jobBenefits: state.job.jobBenefits,
  jobRequirements: state.job.jobRequirements,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(CompanyJobsPage);

export default withConnect;