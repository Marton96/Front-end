import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    divCard: {
        display: 'flex',
        justifyContent: 'center',
        padding: 40
    },
  card: {
       
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div className={classes.divCard}>
            {props.companyDetails.contactInfo ?
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={props.companyDetails.contactInfo.avatarUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            {props.companyDetails.name}
                        </Typography>
                        <Typography  component="h3">
                            {props.companyDetails.contactInfo.about}
                        </Typography>
                        <Typography component="p">
                            Email: {props.companyDetails.contactInfo.email}
                        </Typography>
                        <Typography component="p">
                            Phone: {props.companyDetails.contactInfo.phone}
                        </Typography>
                        <Typography component="p">
                            Address: {props.companyDetails.contactInfo.address}
                        </Typography>
                        <Typography component="p">
                            City: {props.companyDetails.contactInfo.city}
                        </Typography>
                        <Typography component="p">
                            Website: {props.companyDetails.contactInfo.website}
                        </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card> : null}
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
