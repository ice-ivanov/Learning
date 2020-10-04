import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/users').then((response) => {
      console.log(response.data);
      this.setState({ users: response.data })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App;
