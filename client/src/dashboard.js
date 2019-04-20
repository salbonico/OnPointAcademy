import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loading from './loading'
import Gauge from './gauge'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});



class Dashboard extends React.Component {

render(){
  if (!this.props.stateinfo.courses){
  return (
    <div><Loading /></div>
  )}

  return (
    <div className="list" >

    {console.log(this.props)}

      <Paper props={this.props} className="paper" elevation={2}>
        <Typography props={this.props} variant="h1" component="h3">
        Welcome {this.props.stateinfo.user.firstname}
        </Typography>
      </Paper>
<div style={{flexDirection: 'row', display: 'flex', flexWrap:'wrap'}}>
<Paper props={this.props} className="paper" elevation={2} style={{marginTop: '15px', paddingTop: '10px', width:'33%', minWidth:'300px'}}>
<Typography variant="h2">
Current Lesson:
</Typography>
 <Paper props={this.props} onClick={() => this.props.history.push(`/courses/${this.props.nextCourse.id}`)} className="paper" elevation={5} style={{marginTop: '5px', marginBottom: '15px', paddingTop: '10px', width:'85%', backgroundColor:'#8AF0E8', opacity:'0.8'}}>

  <Typography variant="h3">
  {this.props.nextCourse && this.props.nextCourse.name}
  </Typography>
  </Paper>
</Paper>
      {this.props.stateinfo.courses &&
      <Paper props={this.props} className="paper" elevation={2} style={{marginTop: '15px', paddingTop: '10px', width:'33%', minWidth:'300px'}}>
      {this.props.gaugefill < 1000 &&
      <Gauge value={this.props.gaugefill}/>}
        <Typography variant="h5">
        {this.props.stateinfo.user.completes.length}/{this.props.stateinfo.courses.length} <br></br>
        Courses completed
        </Typography>
      </Paper>}
      </div>
    </div>
  );
}
}

export default withRouter(withStyles(styles)(Dashboard));
