import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from './EditDetails';
import ProfileSkeleton from '../../util/ProfileSkeleton';

// Redux stuff
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userActions';


// MUI Stuff
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


// ICONS
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import MyButton from '../../util/MyButton';


const styles = (theme)=>({

    ...theme.spreadThis
});
class Profile extends Component {

    handleImageChange = (event) =>{

        const image = event.target.files[0];
        // send to server 

        const formData = new FormData();
        formData.append('image',image,image.name);
        this.props.uploadImage(formData);
    }

    handleEditPicture = ()=>{

        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }

    handleLogout = ()=>{

        this.props.logoutUser();
    }
    render() {

        const {
            classes, 
            user: {
                credentials:
                    { 
                        handle, 
                        createdAt, 
                        imageUrl, 
                        bio, 
                        website, 
                        location
                    },
                authenticated
                },
            loading
            
        } = this.props;

        let profileMarkup = !loading ? (authenticated ? (

            <Paper className={classes.paper}>
                <div className={classes.profile}>
                    <div className="image-wrapper">
                        <img src={imageUrl} alt="profile" className="profile-image" />
                        <input 
                            type="file" 
                            id="imageInput" 
                            hidden="hidden"
                            onChange={this.handleImageChange} 
                        />
                        
                        <MyButton tip="Edit Profile Picture" onClick={this.handleEditPicture} btnClassName="button">
                            <EditIcon color="primary" />
                        </MyButton>
                    </div>
                    <hr />

                    <div className="profile-details">
                        <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
                            @{handle}
                        </MuiLink>
                        <hr />

                        {bio && <Typography variant="body2">{bio}</Typography>}
                        <hr />

                        {location && (
                            <Fragment>
                                <LocationOn color="primary" /> <span>{location}</span>
                                <hr />
                            </Fragment>
                        )}

                        { website && (
                            <Fragment>
                                <LinkIcon color="primary" />
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                    {' '} {website}
                                </a>
                                <hr />
                            </Fragment>
                        )}

                        <CalendarToday color="primary" /> {' '}
                        <span>Joined { dayjs(createdAt).format('MMM YYYY') }</span>
                    </div>


                    <MyButton tip="Logout" onClick={this.handleLogout}>
                        <KeyboardReturn color="primary" />
                    </MyButton>

                    <EditDetails />
                </div>
            </Paper>            
        ) : (
            <Paper className={classes.paper}>
                <Typography variant="body2" align="center">No Profile Found. Please login Again</Typography>
                <div className={classes.buttons}>
                    <Button variant="contained" color="primary" component={Link} to="/login">Login</Button>
                    <Button variant="contained" color="secondary" component={Link} to="/signup">Signup</Button>
                </div>
            </Paper>
        )) : (
                <ProfileSkeleton />
            )
        return profileMarkup;
    }
}

const mapStateToProps = (state)=>({
    user: state.user
});

const mapActionsToProps = {
    logoutUser,
    uploadImage
}
Profile.propTypes = {

    logoutUser: propTypes.func.isRequired,
    uploadImage: propTypes.func.isRequired,
    user: propTypes.object.isRequired,
    classes:propTypes.object.isRequired
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(Profile));
