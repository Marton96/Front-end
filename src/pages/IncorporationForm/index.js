import React from 'react';
import { withStyles } from 'material-ui/styles';
//import './styles.css'

const style = {
    root: {
        boxSizing: 'borderBox',
        width: '100%',
        overflowX: 'auto',
        paddinTop:0,
        fontFamily: 'Helvetica',
      },

    input:{

    },
    button:{
        display: 'inlineBlock',
        width: 'auto',
        backgroundColor: '#8191d8',
        fontSize: 14,
    }

};

class IncorporationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyId: localStorage.getItem("COMPANY_ID"),
            name: '',
            description: '',
            requirements: [{ name: '' }],
            benefits: [{ name: '' }],
        };
    }



    handleRequirementNameChange = (idx) => (evt) => {
        const newRequirement = this.state.requirements.map((requirements, sidx) => {
            if (idx !== sidx) return requirements;
            return { ...requirements, name: evt.target.value };
        });

        this.setState({ requirements: newRequirement });
    }

    handleBenefitNameChange = (idx) => (evt) => {
        const newBenefit = this.state.benefits.map((benefits, sidx) => {
            if (idx !== sidx) return benefits;
            return { ...benefits, name: evt.target.value };
        });

        this.setState({ benefits: newBenefit });
    }


    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        this.props.onCreate(this.state);

    }

    handleAddRequirement = () => {
        this.setState({
            requirements: this.state.requirements.concat([{ name: '' }])
        });
    }

    handleAddBenefit = () => {
        this.setState({
            benefits: this.state.benefits.concat([{ name: '' }])
        });
    }

    handleRemoveRequirement = (idx) => () => {
        this.setState({
            requirements: this.state.requirements.filter((s, sidx) => idx !== sidx)
        });
    }

    handleRemoveBenefit = (idx) => () => {
        this.setState({
            benefits: this.state.benefits.filter((s, sidx) => idx !== sidx)
        });
    }

    render() {
        const classes = this.props.classes;

        return (
            <form onSubmit={this.handleSubmit} className={classes.root}>
                <div className={classes.input}>
                    <input
                        type="text"
                        placeholder={`Job name`}
                        value={this.state.name}
                        onChange={(e)=> this.setState({name: e.target.value})}
                    />
                </div>
                <div className={classes.input}>
                    <input
                        type="text"
                        placeholder={`Job description`}
                        value={this.state.description}
                        onChange={(e)=> this.setState({description: e.target.value})}
                    />
                </div>
                <h4>Job Requirements</h4>
                {this.state.requirements.map((requirements, idx) => (
                    <div className={classes.input}>
                        <input
                            type="text"
                            placeholder={`Requirement #${idx + 1} `}
                            value={requirements.name}
                            onChange={this.handleRequirementNameChange(idx)}
                        />
                        <button className={classes.button} type="button" onClick={this.handleRemoveRequirement(idx)}>-</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddRequirement} className={classes.button}>Add Requirement</button>

                <h4>Job Benefits</h4>
                {this.state.benefits.map((benefits, idx) => (
                    <div className={classes.input}>
                        <input
                            type="text"
                            placeholder={`Benefit #${idx + 1} `}
                            value={benefits.name}
                            onChange={this.handleBenefitNameChange(idx)}
                        />
                        <button className={classes.button}  type="button" onClick={this.handleRemoveBenefit(idx)}>-</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddBenefit} className={classes.button}>Add Benefit</button>
                <button className={classes.button} >Create Job</button>
            </form>
        )
    }
}

export default withStyles(style)(IncorporationForm);