import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';


export function coursePage({ match }) {
  return (
    <div>
    <h1>Test</h1>
    <h1>{match.params.id}</h1>
      {console.log(match)}
    </div>
  );
}
