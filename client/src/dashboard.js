import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Dashboard extends React.Component {


render(){
  console.log(this.props)
  if (!this.props.stateinfo.user){
  return (
    <div><h1>Loading...</h1></div>
  )}
  return (
    <div className="list">

      <Paper props={this.props} className="paper" elevation={2}>
        <Typography props={this.props} variant="h1" component="h3">
        Welcome, {this.props.stateinfo.user.name}
        </Typography>
        <Typography component="p">
        {this.props.stateinfo.user.email}
        </Typography>
      </Paper>
    </div>
  );
}
}

export default withStyles(styles)(Dashboard);
