import React from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const CompanyCreateForm = (props) => {

    let company = {
        "name:": '',
        "userId": localStorage.getItem('LOGGED_USER_ID')
    }

    const onSubmit = () => {
        props.onCreate(company);
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField
                    required
                    id="companyName"
                    label="Company Name"
                    margin="normal"
                    onChange={(e) => company.name = e.target.value}
                />
                <br />

                <Button onClick={onSubmit.bind(this)} variant="raised" color="primary"  >
                    CREATE COMPANY
             </Button>
            </form>
        </div>
    );
}

export default CompanyCreateForm
