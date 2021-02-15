import React from 'react';
import type { Shield }from './components/Shield/types'
import { ShieldView } from './components/Shield';
import './App.css';

const logo: Shield = {
    owner: 'yves.christol@gmail.com',
    color: 'orange',
    partition: { name: 'parti', color: 'sable' },
    meubles: [
        { name: 'morningstar', color: 'argent', stroke: 'argent', position: 'r1' }
    ]
}

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
            <ShieldView shield={logo} shine={true} />
        </p>
      </header>
    </div>
  );
}

export default App;
