import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

class TestWithParams extends Component {
    componentDidMount() {
        const { match } = this.props;

        console.log(this.props);
        const id = match.params.id;

        console.log('THE ID', id);
        // ToDo dispatch action get by id, send this id to the action
    }

    goToTest = () => {
        this.props.goToTest();
    };

    render() {
        return (
            <div>
                <h1>Test with params</h1>

                <Button color="inherit" onClick={this.goToTest}>
                    OnClick
                </Button>

                <Button color="inherit" component={Link} to="/aaa">
                    Register
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToTest: () => dispatch(push('/test2')),
});

export default connect(null, mapDispatchToProps)(TestWithParams);