import React, { Component } from 'react';
import logo from './logo.svg';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Dashboard catToAdopt={{
          imageURL:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42280764/1/?bust=1532461910&width=600', 
          imageDescription: 'A domestic short hair sitting next to a phone outlet',
          name: 'Luka',
          sex: 'Male',
          age: 2,
          breed: 'Domestic Short Hair',
          story: 'Thrown on the street'
        }} dogToAdopt={{
          imageURL: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42111872/1/?bust=1530939733&width=600',
          imageDescription: 'A happy looking dog',
          name: 'Elton',
          sex: 'Male',
          age: 3,
          breed: 'Shepherd & Collie Mix',
          story: 'Owner Passed away'
        }}/>
      </div>
    );
  }
}

export default App;
