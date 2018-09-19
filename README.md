A simple reusable less bundle size date selector component for React


Installation
The package can be installed via NPM:

npm install react-date-selector --save
Below is a simple example of how to use the Datepicker in a React view.

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleDateSelector from 'react-date-selector';

class App extends Component {

  onChange = (value) => {
    console.log('inside ' + JSON.stringify(value));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SimpleDateSelector
          onChange={this.onChange}
         />
      </div>
    );
  }
}

export default App;


Configuration
The most basic use of the DateSelector can be described with:

<SimpleDateSelector
  onChange={this.onChange}
/>

Compatibility
React
We're always trying to stay compatible with the latest version of React. We can't support all older versions of React.

Compatible versions: React 15.5 or newer

Browser Support: The date picker is compatible with the latest versions of Chrome, Firefox, and IE10+.

Unfortunately, it is difficult to support legacy browsers while maintaining our ability to develop new features in the future. For IE9 support, it is known that the classlist polyfill is needed, but this may change or break at any point in the future.

Local Development
The master branch contains the latest version of the DateSelector component. To start your example app, you can run yarn start.

License: Licensed under MIT license.