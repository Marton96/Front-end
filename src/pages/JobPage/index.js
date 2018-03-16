import React from 'react';

import { connect } from 'react-redux';

import * as jobActions from '../../actions/Job';
import * as companyActions from '../../actions/Compnay';

import JobsList from '../../components/JobsList';
import JobCreate from '../../pages/IncorporationForm';
import JobEdit from '../../components/EditJobDialog';
import CompanyDetails from '../../components/CompanyDetails';

class JobsPage extends React.Component {
    state = {
        dialogOpen: false,
        editJobInfo: null,
    }
    componentDidMount() {
        this.props.getJobsByCompany(localStorage.getItem("COMPANY_ID"));
        this.props.getCompanyInfo(this.props.match.params.number);
    }

    
    onEdit = (jobInfo) => {
        this.setState({
             dialogOpen: true,
             editJobInfo: jobInfo,
        });
    }

    onEditClose = () => {
        this.setState({
            dialogOpen: false,
            editJobInfo: null,
       });
    }

    onEditSave = (newJobValue) => {
        console.log(newJobValue);
     this.props.onUpdate(newJobValue.id,newJobValue)

        this.onEditClose();
    }

    onEditSave2 = (newJobValue) => {
        console.log(newJobValue);
     this.props.onUpdate(newJobValue.id,newJobValue)

    }
    render() {
        console.log("Hello",this.props)
        return (
            <div>
                <h1>JobPage</h1>
                <CompanyDetails companyDetails={this.props.companyInfo} />
                <JobCreate 
                    onCreate={this.props.onCreate} 
                />
                <JobsList 
                    jobs={this.props.jobsByCompany} 
                    onDelete={this.props.onDelete} 
                    onEdit={this.onEdit} 
                    onApplications = {this.props.onApplications}
                />
                <JobEdit 
                    jobData={this.state.editJobInfo}
                    openned={this.state.dialogOpen}
                    onClose={this.onEditClose}
                    onSave={this.onEditSave}
                    onSave2={this.onEditSave2}
                />
             
            </div>
        );

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getJobsByCompany: (id) => dispatch(jobActions.getJobsByCompany(localStorage.getItem("COMPANY_ID"))),
        onCreate: (job) => dispatch(jobActions.createJob(job)),
        onDelete: (id) => dispatch(jobActions.deleteJob(id)),
        onUpdate: (id, value) => dispatch(jobActions.updateJob(id,value)),
        onApplications: (id) => dispatch(jobActions.onApplications(id)),
        getCompanyInfo: (id) => dispatch(companyActions.getCompanyInfo(id)),
    };
};

const mapStateToProps = (state) => ({
    jobsByCompany: state.job.jobByCompanyInfoList,
    companyInfo: state.company.companyInfo,

});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobsPage);

export default withConnect;