import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     dishes: DISHES
  //   };
  // }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
   }
  }

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
