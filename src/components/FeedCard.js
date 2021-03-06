import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { blueGrey } from '@material-ui/core/colors';
import { Button, CardActionArea } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import BookmarksList from './BookmarksList';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '1',
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
        borderRadius: '1px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blueGrey[500],
    },
    button: {
        margin: theme.spacing(1),
        color: blueGrey[500],
        borderColor: blueGrey[500],
    },
    typography: {
        color: blueGrey[500],
    },
    chip: {
        margin: theme.spacing(1),
        backgroundColor: blueGrey[100],
    },
}));

const BookmarksCollectionCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const { author, title, description, bookmarks, tags, likes, publishedTime } = props.collection;
    // const {onClick} = props.function

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
        <CardHeader
            avatar={
            <Avatar aria-label="author" className={classes.avatar} src={author.avatar} />
            }
            // action={
            // <IconButton aria-label="Settings">
            //     <MoreVertIcon />
            // </IconButton>
            // }
            title={title}
            subheader={`Published by ${author.name}. At ${publishedTime}.`}
        />
            <Divider variant="inset" />
        <CardContent>
            <Typography variant='body2' color='textSecondary'> Description </Typography>
            <Typography variant='body1' color='textPrimary'> {description} </Typography>
        </CardContent>

        <CardActions disableSpacing>
            <Button variant='outlined' size='small' color='primary' className={classes.button}> Add </Button>
            <Button variant='outlined' size='small' color='primary' className={classes.button}> Save </Button>

            <IconButton aria-label="Add to favorites">
            <FavoriteBorderIcon />
            </IconButton>
            <Typography className={classes.typography}> {likes} </Typography>
            <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
            >
            <Tooltip title='Expand to see bookmarks'>
                <ExpandMoreIcon />
            </Tooltip>       
            </IconButton>
        </CardActions>
        <Divider variant='middle'/>
        <CardContent>
            <Typography variant='body2' color='textSecondary'>
                Tags
                {tags.map(tag => 
                    <Chip
                    size="small"
                    label={tag}
                    clickable
                    className={classes.chip}
                    />
                )}
            </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent> <BookmarksList bookmarks={bookmarks} /> </CardContent>
        </Collapse>
        </Card>
    );
}
export default BookmarksCollectionCard;