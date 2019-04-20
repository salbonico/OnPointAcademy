import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loading from './loading'
import './App.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import { withRouter } from 'react-router-dom';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Course extends React.Component {
  handleComplete = () => {
    this.props.createComplete2({course_id:this.props.courseid},this.props.route)
    this.setState({ completed: !this.state.completed });
  };

  handleUncomplete = (courseid) => {
    let id = this.props.user.completes.find(function (complete) { return complete.course_id === parseInt(courseid)})
    this.props.destroyComplete2({course_id:id.id}, this.props.route)
    this.setState({ completed: !this.state.completed });
  };



  state = {
    completed: this.props.buttoncheck
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
{!this.state.completed &&
<Button variant="contained" onClick={() => this.handleComplete()} style={{background: '#D23D2F',color:'#FAFAFA',marginTop:'10px'}}><Typography variant="h4" style={{fontWeight:'300', color:'white'}} noWrap>Mark Completed</Typography></Button>
}

{this.state.completed &&
<Button variant="contained" onClick={() => this.handleUncomplete(this.props.courseid)} style={{background: 'green',marginTop: '10px', color:'white'}}><DoneIcon style={{marginRight:'5px'}}/><Typography style={{fontWeight:'300', color:'white'}} variant="h4" noWrap> Completed</Typography></Button>
}


    </div>
  );
}
}

export default withRouter(withStyles(styles)(Course));
