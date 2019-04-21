import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Editprofile extends React.Component {
  handleClick = () => {
    this.props.updateProfile(this.state,this.props.route)
  };


  state = {
      id: this.props.user.id,
      name: this.props.user.name,
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      email: this.props.user.email,
      bio: this.props.user.bio,
    };

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    render() {
      const { classes } = this.props;

      return (

        <Paper className="paper" elevation={2}>
{console.log(this.props.user)}  
          <Typography variant="h2" component="h3">
          Edit Profile
          </Typography>


        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Username"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="firstname"
            label="First Name"
            className={classes.textField}
            value={this.state.firstname}
            onChange={this.handleChange('firstname')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="lastname"
            label="Last Name"
            className={classes.textField}
            value={this.state.lastname}
            onChange={this.handleChange('lastname')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="bio"
            label="Bio"
            style={{ margin: 8 }}
            placeholder="Tell us something about yourself"
            fullWidth
            margin="normal"
            variant="outlined"
            value={this.state.bio}
            onChange={this.handleChange('bio')}
          />
        </form>
        <Button variant="contained" onClick={() => this.handleClick()} style={{background: '#D23D2F',color:'#FAFAFA',marginTop:'10px'}}><Typography variant="h6" style={{fontWeight:'400', color:'white'}} noWrap>Update Profile</Typography></Button>
        </Paper>
      );
    }
  }

  Editprofile.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Editprofile);
