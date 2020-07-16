import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import MenuBar from './components/MenuBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Arianna Leah Fischer',
      headerLinks: [
        {title: 'HOME', path: '/'},
        {title: 'PEOPLE', path: '/people'},
        {title: 'PUBLICATIONS', path: '/publications'},
        {title: 'CONTACT', path: '/contact'}
      ],
      header: {
        logo: 'Beristain Lab',
        socials: ['twitter', 'google+'],
        searchBar: ''
      },
      home: {
        title: 'Summary',
        text: ''
      },
      people: {
        title: 'People',
      },
      contact: {
        title: 'Contact',
      }
    }
  }
  render() {
    return (
      <div>
        <HomePage headerLinks={this.state.headerLinks}/>
      </div>
    );
  }
  
}

export default App;
