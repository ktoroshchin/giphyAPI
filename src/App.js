import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input';
import Gif from './Gif';

class App extends Component {

  state = {
    giff: [],
  }

  performSearch = (query) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=50`)
    .then( response => {
      console.log(response);
      let data = response.data.data
      this.setState({
        giff: data.map( item => item.images.fixed_height.url),
      })
    })
}

  render() {
    return (
      <div className="App">
        <Input performSearch={this.performSearch}/>
        <div>
          <Gif images={this.state.giff}/>
        </div>
      </div>
    );
  }
}

export default App;
