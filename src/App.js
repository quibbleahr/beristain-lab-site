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
        {title: 'Home', path: '/'},
        {title: 'People', path: '/people'},
        {title: 'Publications', path: '/publications'},
        {title: 'Contact', path: '/contact'}
      ],
      header: {
        logo: 'Beristain Lab',
        socials: ['twitter', 'google+'],
        searchBar: ''
      },
      home: {
        title: 'Summary',
        text: 'The Olsen Lab focuses on engineering new biofunctional and bioinspired materials and understanding the novel polymer physics required to control the nanoscale structure and properties of these complex systems.  To do this, we apply cutting-edge polymer chemistry and protein engineering to synthesize new materials at the interface of biology and the physical sciences.  To intelligently design such systems, we investigate the relationships between molecular structure and self-assembly, applying concepts from block copolymer assembly and polymer gels to understand complex biohybrid materials.  Our efforts are aimed at applying biological components or biological design principles to dramatically extend the capability of soft materials such as engineering plastics, energy converters, catalysts, and biomedical hydrogels.  Through the study of natural polymer systems, we also hope to produce a new sustainable source of functional polymers.'
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
        <HomePage />
      </div>
    );
  }
  
}

export default App;
