import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div className="App">
         <Main />
      </div>
    );
  }
}

export default App;