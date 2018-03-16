import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import * as moment from 'moment';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Clear from 'material-ui-icons/Clear'
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    doneIcon: {
        color: green[500],
    },
    clearIcon: {
        color: red[500],
    }
});



function SimpleCard(props) {
    const { classes } = props;

    console.log("props->",props.jobs);
    return (
        <div>
            <Grid container spacing={24}>
                {props.jobs ? props.jobs.map((c) => {
                    return (
                        <Grid item xs={4} key={c.id}>
                            <Card className={classes.card} >
                                <CardContent>
                                    
                                    {c.isAvailable===true ? <Done className={classes.doneIcon} /> : <Clear className={classes.clearIcon}/>}
                                    <Typography className={classes.title}>Created {}

                                        { moment(c.createdAt).fromNow() }
                                        <br />

                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        {c.name}
                                    </Typography>
                                    <Typography className={classes.pos}><br /></Typography>
                                    {/* <Typography component="p">
                                        {c.description}
                                    </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <Button size="small"  onClick={() => props.onSeeMore(c.id)}>See more</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }) : null}
            </Grid>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
