import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loading from './loading'
import './App.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});




class Course extends React.Component {



  state = {
    completed: false,
  };

  componentDidMount() {
    

      }

  handleChange = name => event => {
    this.setState({ completed: !this.state.completed });
  };

render(){
  if (!this.props.course){
  return (
    <div><Loading /></div>
  )}



  return (
    <div className="list">


      <Paper props={this.props} className="paper" elevation={2}>

        <Typography props={this.props} variant="h1" component="h3">
        {this.props.course.name}
        </Typography>
        <Typography style={{paddingTop: '8px'}} component="p">
        {this.props.course.description}
        </Typography>
      </Paper>
<Paper style={{marginTop: '15px', padding: '25px', maxWidth:'90%', minWidth:'300px'}}
props={this.props} className="paper" elevation={2}>
<Typography component="p">
{this.props.course.content}
</Typography>
</Paper>

    </div>
  );
}
}

export default withStyles(styles)(Course);
