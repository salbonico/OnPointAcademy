import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  button: {
    marginTop: 6,
    marginLeft: 18 ,
    opacity: 1,
    color: 'red',
    background: 'black',
  },
  button2:{
    marginTop: 6,
    marginLeft: 22 ,
    opacity: 1,
    color: 'red',
    background: 'black',
  },
  input: {
    display: 'none',
  },
  welcome:{
    marginLeft: -18,
  },

});


class Loginbox extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Typography className={classes.welcome} variant="h2" color="black" noWrap>
      Welcome
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Username"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-uncontrolled"
          label="Password"
          type="password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained"  className={classes.button}>
        Login
      </Button>
      <Button variant="contained"  className={classes.button2}>
        Signup
      </Button>

      </form>
      </div>
    );
  }
}

Loginbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loginbox);
