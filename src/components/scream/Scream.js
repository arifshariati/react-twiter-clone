import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import propTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import DeleteScream from './DeleteScream';
import ScreamDialog from './ScreamDialog';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// Mui Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Redux Stuff
import {connect} from 'react-redux';


// ICONS
import ChatIcon from '@material-ui/icons/Chat';
import  LikeButton  from './LikeButton';


const styles = {

    card:{
        position: 'relative',
        display:"flex",
        marginBottom:20,
    },
    image:{
        minWidth:200,
    },
    content:{
        padding:25,
        objectFit:'cover'
    }
}
class Scream extends Component {

    

    render() {

        dayjs.extend(relativeTime);

        const { 
            classes, 
            scream:{ 
                body,
                createdAt,
                userImage,
                userHandle,
                screamId,
                likeCount,
                commentCount 
            },
            user:{
                authenticated, 
                credentials: { handle }
            } 
        } = this.props;

         

        const deleteButton = authenticated && userHandle === handle ? (

            <DeleteScream screamId={screamId} />
        ): null;

        return (
            
            <Card className={classes.card}>
                <CardMedia 
                    className={classes.image}
                    image={ userImage }
                    title = " Profile Image"
                    alt={body}
                />
                <CardContent className={classes.content}>
                    <Typography 
                        variant="h5"
                        color="primary"
                        component={Link}
                        to={`/users/${userHandle}`}
                    >
                        { userHandle }
                    </Typography>

                    {deleteButton}

                    <Typography 
                        variant="body2" 
                        color="textSecondary"
                    >
                        { dayjs(createdAt).fromNow() }
                    </Typography>
                    <Typography variant="body1">{ body }</Typography>

                        <LikeButton screamId={screamId} />

                    <span>{likeCount} likes</span>

                    <MyButton tip="Comments">
                        <ChatIcon color="primary" />
                    </MyButton>
                    <span>{commentCount} Comments</span>

                    <ScreamDialog screamId={screamId} userHandle={userHandle} openDialog={this.props.openDialog} />
                </CardContent>
            </Card>
        )
    }
}

Scream.propTypes = {

    user: propTypes.object.isRequired,
    scream:propTypes.object.isRequired,
    classes:propTypes.object.isRequired,
    openDialog:propTypes.bool
}
const mapStateToProps = (state) => ({

    user: state.user
})


export default connect(mapStateToProps) (withStyles(styles)(Scream));
