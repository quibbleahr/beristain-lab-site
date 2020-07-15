// code edited from @petercatalin at https://stackblitz.com/edit/material-ui-custom-outline-color

// code to make this mobile-friendly: https://codesandbox.io/s/blog-mobile-sandbox-approach-2-mzomg?from-embed=&file=/src/App.js

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import './Title.css'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  searchIcon: {
    color: '#E5E5E5'
  },

  inputWriting: {
      color: '#E5E5E5'
  }
});

class MenuBar extends React.Component {
  state = {
    name: 'Search...',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="navbar-marg mr-auto">
                <Nav.Link className="nav-item" href="/home">HOME</Nav.Link>
                <Nav.Link className="nav-item" href="/people">PEOPLE</Nav.Link>
                <Nav.Link className="nav-item" href="/contact">CONTACT</Nav.Link>
            </Nav>
        <TextField
          id="standard-name"
          className={classes.textField}
          placeholder={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          InputLabelProps={{
            classes: {
              input: classes.inputWriting,
            },
          }}
          InputProps={{
            classes: {
              input: classes.inputWriting,
            },
            endAdornment: (
              <InputAdornment position="start">
                  <SearchIcon className={classes.searchIcon}/>
              </InputAdornment>
            )
          }}
        />
        </Navbar>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
