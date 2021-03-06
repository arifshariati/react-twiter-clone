import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import propTypes from 'prop-types';
import MyButton from '../../util/MyButton';

// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

// ICONS
import DeleteOutline from '@material-ui/icons/DeleteOutline';

// Redux Stuff
import { connect } from 'react-redux';
import { deleteScream } from '../../redux/actions/dataActions';

const styles = {

    deleteButton:{
        top:'10%',
        left: '90%',
        position: 'absolute',
    }
}
class DeleteScream extends Component {

    state = {

        open:false,

    }

    handleOpen = ()=>{

        this.setState({
            open:true
        })
    }

    handleClose = ()=>{

        this.setState({
            open:false
        })
    }

    deleteScream = ()=>{

        this.props.deleteScream(this.props.screamId);
        this.setState({
            open:false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <MyButton tip="Delete Scream" onClick={this.handleOpen} btnClassName={classes.deleteButton}>
                    <DeleteOutline color="secondary" />
                </MyButton>

                <Dialog 
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>Are you sure you want to Delete  Scream ?</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" > Close </Button>
                        <Button onClick={this.deleteScream} color="secondary" > Delete </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

DeleteScream.propTypes = {
    deleteScream: propTypes.func.isRequired,
    classes:propTypes.object.isRequired,
    screamId: propTypes.string.isRequired
}

export default connect(null,{ deleteScream }) (withStyles(styles)(DeleteScream));
