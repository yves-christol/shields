import React from 'react';
import { ShieldView } from './components/Shield';
import { colors } from './components/Color';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Shields, a 
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <code> React </code>
            </a> 
            component to build ans display shields.
        </p>
        <p style={{width: '300px', height: '400px'}}>
            <ShieldView color={colors.or} />
        </p>
      </header>
    </div>
  );
}

export default App;
