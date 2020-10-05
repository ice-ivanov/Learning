import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'
import data from './components/Data.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      tasks: [],
    }
  }

  componentDidMount = () => {
    axios.get('/api/users').then((response) => {
      console.log(response.data);
      this.setState({ users: response.data })
    })
    .catch(err => console.log(err))
    this.setState({ tasks: data })
  }

  updateTask = (task) => {
    this.setState({tasks: this.state.tasks.map(t => t.id === task.id ? task : t)})
  }

  render() {
    const {tasks, users} = this.state

    return (
      <div>
        <Navbar />
        <MainContent tasks={tasks} updateTask={this.updateTask} />
        <Footer />
      </div>
    )
  }
}

export default App;
