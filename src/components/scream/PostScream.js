import React, {Component, Fragment} from 'react';
import propTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';

// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

// Redux Stuff
import { connect} from 'react-redux';
import { postScream, clearErrors } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.spreadThis,
    submitButton:{
        position:'relative',
        float:'right'
    },
    progressSpinner:{
        position:'absolute'
    },
    closeButton:{
        position:'absolute',
        left:'91%',
        top:'6%'
    }
})
class PostScream extends Component {

    state = {
        open: false,
        body: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.UI.errors){

            this.setState({
                errors: nextProps.UI.errors
            });
        };

        if(!nextProps.UI.errors && !nextProps.UI.loading){

            this.setState({
                body:'',
                open:false,
                errors:{}
            });
        }
    }

    handleOpen = ()=>{

        this.setState({
            open:true
        })
    }

    handleClose = ()=>{

        this.props.clearErrors();
        this.setState({
            open:false,
            errors:{}
        })
    }

    handleChange = (event) =>{

        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.postScream({body:this.state.body});
    }

    render(){

        const { errors } = this.state;
        const { classes, UI: { loading }} = this.props;

        return (
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Post Scream">
                    <AddIcon />
                </MyButton>

                <Dialog 
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <MyButton tip="Close" onClick={this.handleClose} btnClassName={classes.closeButton}>
                        <CloseIcon />
                    </MyButton>
                    
                    <DialogTitle>Post a New Scream</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField 
                                name="body"
                                type="text"
                                label="Scream"
                                multiline
                                rows="3"
                                placeholder=" Scream Here !!!"
                                error = {errors.errors ? true : false} 
                                helperText={errors.body}
                                className={classes.textField} 
                                onChange={this.handleChange}
                                fullWidth
                                maxWidth="sm"
                            />
                            <Button 
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submitButton}
                                disabled={loading}
                            >
                                {loading && (

                                    <CircularProgress size={20} className={classes.progressSpinner} />
                                )} 
                                
                                Post Scream
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )

    }
}

PostScream.propTypes = {

    postScream:  propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired,
    UI: propTypes.object.isRequired
};

const mapStateToProps = (state) =>({

    UI: state.UI
})
export default connect(mapStateToProps,{ postScream, clearErrors }) (withStyles(styles)(PostScream));