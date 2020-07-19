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
  },

  menubar: {
    opacity: '95%',
    backgroundColor: 'black',
    height: '60px',
    borderBottom: '1px solid white',
    borderTop: '1px solid white'
  },

menubarItem: {
    color: 'white',
    marginRight: '30%',
    marginLeft: '30%',
    ':hover': {
        opacity: '90%'
    }
  }

});

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Search...',
            headerLinks: [...this.props.headerLinks]
        };
    }

    handleChange = name => event => {
        this.setState({
        [name]: event.target.value,
        });
    };

    makeMenuItems = (items) => {
        return items.map(item => {
            return (
                <div className="menubarItem mr-auto">
                    <Nav.Link href={item.path}>{item.title}</Nav.Link>
                </div>);
        })
    }

    render() {
        const { classes } = this.props;

    return (
        <Navbar variant="dark" className={classes.menubar}>
            <Nav className="navbar-marg mr-auto">
                {this.makeMenuItems(this.state.headerLinks)}
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
