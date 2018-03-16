import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import TagFacesIcon from 'material-ui-icons/TagFaces';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
});

class ChipsArray extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h2> Job Requirements </h2>
                <Paper className={classes.root}>

                    {this.props.requirements ? this.props.requirements.map(requirements => {

                        return (
                            <Chip
                                key={requirements.id}
                                label={requirements.name}
                                className={classes.chip}
                            />

                        );
                    }) : null}
                </Paper>
            </div>
        );
    }
}

ChipsArray.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);