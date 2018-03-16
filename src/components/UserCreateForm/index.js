import React from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const UserCreateForm = (props) => {

    let user = {
        "username": '',
        "password": '',
        "lastName": '',
        "firstName": '',
        "userRoleId": ''
    }

    const onSubmit = () => {
        props.onCreate(user);
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField
                    required
                    id="firstName"
                    label="First Name"
                    margin="normal"
                    onChange={(e) => user.firstName = e.target.value}

                />
                <br />
                <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    margin="normal"
                    onChange={(e) => user.lastName = e.target.value}


                />
                <br />

                <TextField
                    required
                    id="username"
                    label="Username"
                    margin="normal"
                    onChange={(e) => user.username = e.target.value}



                />
                <br />
                <TextField
                    required
                    id="password"
                    label="Password"
                    margin="normal"
                    onChange={(e) => user.password = e.target.value}

                />

                <br />
                <TextField
                    required
                    id="userRoleId"
                    label="User Role Id"
                    margin="normal"
                    onChange={(e) => user.userRoleId = e.target.value}
                />

                <br />
                <Button onClick={onSubmit.bind(this)} variant="raised" color="primary"  >
                    CREATE
             </Button>
            </form>
        </div>
    );
}

export default UserCreateForm