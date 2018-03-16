import React from 'react';

import { connect } from 'react-redux';

import CompanyCreateForm from '../../components/CompanyCreateForm';
import CompanyList from '../../components/CompanyList';
import CompanyEdit from '../../components/CompanyEditDialog';
import * as companyActions from '../../actions/Compnay';

class CompanyPage extends React.Component {

    state ={
        dialogOpen:false,
        editCompanyInfo: null,
    }

    componentDidMount() {
        this.props.getCompaniesByUser(localStorage.getItem('LOGGED_USER_ID'));
    }

    onEdit = (companyInfo) => {
        this.setState({
             dialogOpen: true,
             editCompanyInfo: companyInfo,
        });
    }

    onEditClose = () => {
        this.setState({
            dialogOpen: false,
            editCompanyInfo: null,
       });
    }

    onEditSave = (newCompanyValue) => {
     this.props.onUpdate(newCompanyValue.id,newCompanyValue)
        this.onEditClose();
    }

    render() {
        return (
            <div>
                <h1>Company Page</h1>
                <CompanyCreateForm onCreate={this.props.onCreate} />
                <CompanyList companies={this.props.companies} onDelete={this.props.onDelete} onEdit={this.onEdit} onRedirect={this.props.onRedirect}/>
                <CompanyEdit 
                    companyData={this.state.editCompanyInfo}
                    openned={this.state.dialogOpen}
                    onClose={this.onEditClose}
                    onSave={this.onEditSave}
                />
            </div>
        );

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCompaniesByUser: () => dispatch(companyActions.getCompanyByUser(localStorage.getItem('LOGGED_USER_ID'))),
        onCreate: (company) => dispatch(companyActions.createCompany(company)),
        onDelete: (id) => dispatch(companyActions.deleteCompany(id)),
        onUpdate: (id, value) => dispatch(companyActions.updateCompany(id,value)),
        onRedirect: (id) => dispatch(companyActions.onRedirect(id)),
    };
};

const mapStateToProps = (state) => ({
    companies: state.company.companyInfoList,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(CompanyPage);

export default withConnect;