import React from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import noProfileImage  from '../images/noProfileImage.png';

import Paper from '@material-ui/core/Paper';

import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';


const styles = (theme) =>({

    ...theme.spreadThis,
    handle:{
        height:20,
        backgroundColor: theme.palette.primary.main,
        width:60,
        margin: '0 auto 7 auto',
        textAlign:'center'
    },
    fullLine:{
        height:15,
        backgroundColor:'rgba(0,0,0,0.3)',
        width:'100%',
        marginBottom:10
    },
    halfLine:{
        height:15,
        backgroundColor:'rgba(0,0,0,0.3)',
        width:'50%',
        marginBottom:10
    }
})
const ProfileSkeleton = (props) =>{

    const { classes } = props;

    return (

        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img className="profile-image" src={noProfileImage} alt="profile" />

                </div>
                <hr />

                <div className="profile-details">
                    <div className={classes.handle} />
                    <hr />
                    <div className={classes.fullLine} />
                    <div className={classes.fullLine} />
                    <hr />
                    <LocationOn color="primary" /> <span>Location</span>
                    <hr />
                    <LinkIcon color="primary" />https:wwww.dummyWebsite.com
                    <hr />
                    <CalendarToday color="primary" /> JoinedDate
                </div>
            </div>
        </Paper>
    )


}

ProfileSkeleton.propTypes ={
    classes:propTypes.object.isRequired
}
export default withStyles(styles) (ProfileSkeleton);