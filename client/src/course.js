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

class Course extends React.Component {
  renderPics = () => this.props.course.map((course) => <p> src={course.name} </p>)

render(){
  return (
    <div className="list">
    {console.log(this.props)}
      <Paper props={this.props} className="paper" elevation={2}>
      {console.log(this.props)}
        <Typography props={this.props} variant="h5" component="h3">
        {this.props.course.name}
        </Typography>
        <Typography component="p">
        {this.props.course.description}
        </Typography>
      </Paper>
    </div>
  );
}
}

export default withStyles(styles)(Course);