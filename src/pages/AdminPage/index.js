import React from 'react';
import UsersList from '../../components/UsersList';
import UserCreate from '../../components/UserCreateForm';

import UserEdit from '../../components/EditDialog';
import { connect } from 'react-redux';

import * as adminActions from '../../actions/Admin';

class AdminPage extends React.Component {
    state = {
        dialogOpen: false,
        editUserInfo: null,
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    onEdit = (userInfo) => {
        this.setState({
             dialogOpen: true,
             editUserInfo: userInfo,
        });
    }

    onEditClose = () => {
        this.setState({
            dialogOpen: false,
            editUserInfo: null,
       });
    }

    onEditSave = (newUserValue) => {
        console.log(newUserValue);
     this.props.onUpdate(newUserValue.id,newUserValue)

        this.onEditClose();
    }

    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <UserCreate 
                    onCreate={this.props.onCreate}
                />
                <UsersList 
                    users={this.props.users || []} 
                    onDelete={this.props.onDelete} 
                    onEdit={this.onEdit}
                />

                <UserEdit 
                    userData={this.state.editUserInfo}
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
        getAllUsers: () => dispatch(adminActions.getAllUsers()),
        onCreate: (user) => dispatch(adminActions.createUser(user)),
        onDelete: (id) => dispatch(adminActions.deleteUser(id)),
        onUpdate: (id, value) => dispatch(adminActions.updateUser(id,value)),
    };
};

const mapStateToProps = (state) => ({
    users: state.admin.userInfoList
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(AdminPage);

export default withConnect;