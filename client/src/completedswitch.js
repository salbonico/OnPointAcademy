import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Loading from './loading'
class Completedswitch extends React.Component {



  state = {
    completed: this.props.status,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    if (!this.props){
    return (
      <div><Loading /></div>
    )}

    return (
      <div>
      {console.log(this.props.status)}
      <FormControlLabel
          control={
            <Switch
              checked={this.props.status}
              onChange={this.handleChange('completed')}
              value="completed"
            />}
            label="Completed"
        />

      </div>
    );
  }
}

export default Completedswitch;
