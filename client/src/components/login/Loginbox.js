import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

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
    marginLeft: '65px',
    marginTop: '5px',
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
    password: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  routeHome = () => this.props.history.push('/home')

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.welcome} variant="h2" noWrap>
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
            id="outlined-password"
            label="Password"
            type="password"
            value={this.state.password}
            className={classes.textField}
            onChange={this.handleChange('password')}
            margin="normal"
            variant="outlined"
          />
          <Button onClick={() => this.props.fetchUser2(this.state,this.routeHome)} variant="contained"  className={classes.button}>
          Login
          </Button>
        </form>
      </div>
    );
  }
}

Loginbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter((withStyles(styles)(Loginbox)));
