import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import oplogo from './oplogo.png';
import Button from '@material-ui/core/Button';
import './App.css';
import DoneIcon from '@material-ui/icons/Done';
import { withRouter } from 'react-router-dom'

const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: 'white',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    color: "black",
    marginLeft: 5,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: 0,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    if (this.state.open === false )
    {this.setState({ open: true });}
    else {this.handleDrawerClose()}
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

logout = () => {

}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="primary"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>

            <Typography variant="h6" noWrap>

            </Typography>
              <img className="oplogo" src={oplogo} alt='oplogo' />
              <Button onClick={this.handleDrawerOpen} variant="contained" style={{background: '#D23D2F',color:'#FAFAFA', marginLeft: '1%',}}>
               Courses
            </Button>
            <Button onClick={() => this.props.logout(this.props.routeLogin)} variant="contained" style={{background: '#D23D2F',color:'#FAFAFA', marginLeft: '1%',}}>
            Logout
          </Button>
          <Button onClick={() => this.props.history.push(`/home`)} variant="contained" style={{background: '#D23D2F',color:'#FAFAFA', marginLeft: '1%',}}>
           Home
        </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
          <Typography variant="h2" style={{marginRight: '5px', paddingBottom: '18px', paddingTop:'17px'}}>
          Courses
          </Typography>
          </div>
          <Divider />
          <List>
            {this.props.courses.map((course) => (
              <ListItem button onClick={() => this.props.history.push(`/courses/${course.id}`)} key={course.id}>
              {course.id < 5 &&
              <ListItemIcon>
              <DoneIcon />
              </ListItemIcon>
              }
              <ListItemText primary={course.name} />
              </ListItem>
            ))}
          </List>

        </Drawer>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(MiniDrawer));
