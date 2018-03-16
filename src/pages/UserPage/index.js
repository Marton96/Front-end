import React from 'react';
import { connect } from 'react-redux';
import * as jobActions from '../../actions/Job';

import JobsList from '../../components/JobsForUsers';

class UserPage extends React.Component {

    onSeeMore = () => {
        console.log("See more");
        this.setState({
            dialogOpen: true,
        });
    }

    onDialogClose = () => {
        this.setState({
            dialogOpen: false,
        });
    }

    render() {
        return (
            <div>
                <h1>User Page</h1>

                <JobsList
                    jobs={this.props.jobs || []}
                    onSeeMore={this.props.onRedirect}
                />


            </div>
        );

    }

    componentDidMount() {
        this.props.getAllJobs();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllJobs: () => dispatch(jobActions.getAllJobs()),
        onRedirect: (id) => dispatch(jobActions.onRedirect(id)),
    };
};

const mapStateToProps = (state) => ({
    jobs: state.job.jobInfoList,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default withConnect;