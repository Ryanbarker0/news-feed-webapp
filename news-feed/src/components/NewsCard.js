import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';


const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class NewsCard extends React.Component {

    render() {
        const { classes, article } = this.props;
        const date = article.published

        return (
            <div className='news-item'>
            
            <Card className={classes.card}>
                    <a href={article.url}>
                <CardHeader
                    title={article.title}
                    subheader={date}
                /> </a>
                    <a href={article.url}>
                <CardMedia
                    className={classes.media}
                    image={article.image_url}
                    title={article.title}
                /> </a>
                <CardContent>
                    <Typography component="p">
                        {article.description}
                    <CardHeader subheader={article.source} />
          </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                </CardActions>
            </Card>
                
            </div>
        );
    }
}

NewsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);
