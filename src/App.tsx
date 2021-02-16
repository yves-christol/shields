import React, { useState } from 'react'
import type { Shield }from './components/Shield/types'
import { ShieldView } from './components/Shield'
import ColorPicker from './components/Shield/color/ColorPicker'
import PartitionPicker from './components/Shield/partition/PartitionPicker'
import PiecePicker from './components/Shield/piece/PiecePicker'
import MeublePicker from './components/Shield/meuble/MeublePicker'
import './App.css';

const logo: Shield = {
    owner: 'yves.christol@gmail.com',
    color: 'orange',
    partition: { name: 'parti', color: 'sable' },
    piece: { name: 'none', color: 'argent' },
    meubles: [
        { name: 'morningstar', color: 'argent', stroke: 'argent', position: 'r1' }
    ]
}

function App() {
    const [shield, setShield] = useState(logo)

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Shields, a 
                    &nbsp;<a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <code>React</code>
                    </a>&nbsp;
                    component to build ans display shields.
                </p>
                <p style={{width: '300px', height: '400px'}}>
                    <ShieldView shield={shield} shine={true} />
                </p>
                <ColorPicker 
                    selected={shield.color} 
                    onPick={ (color: string) => {
                        setShield({ ...shield, color })
                    }}
                />
                <PartitionPicker 
                    style={{width: '300px', height: '60px'}}
                    selected={shield.partition.name} 
                    onPick={ (name: string) => {
                        setShield({ ...shield, partition: {color: shield.partition.color, name} })
                    }}
                />
                <ColorPicker 
                    style={{width: '300px', height: '60px'}}
                    selected={shield.partition.color} 
                    onPick={ (color: string) => {
                        setShield({ ...shield, partition: {color, name: shield.partition.name} })
                    }}
                />
                <PiecePicker 
                    style={{width: '300px', height: '60px'}}
                    selected={shield.piece.name} 
                    onPick={ (name: string) => {
                        setShield({ ...shield, piece: {color: shield.piece.color, name} })
                    }}
                />
                <ColorPicker 
                    style={{width: '300px', height: '60px'}}
                    selected={shield.piece.color} 
                    onPick={ (color: string) => {
                        setShield({ ...shield, piece: {color, name: shield.piece.name} })
                    }}
                />
                { shield.meubles.map( (meuble, idx) => 
                    <span key={idx}>
                        <MeublePicker 
                            style={{width: '300px', height: '60px'}}
                            selected={meuble.name} 
                            onPick={ (name: string) => {
                                const newShield = { ...shield }
                                newShield.meubles[idx] = {...meuble, name }
                                setShield(newShield)
                            }}
                        />
                        <ColorPicker 
                            style={{width: '300px', height: '60px'}}
                            selected={meuble.color} 
                            onPick={ (color: string) => {
                                const newShield = { ...shield }
                                newShield.meubles[idx] = {...meuble, color }
                                setShield(newShield)
                            }}
                        />
                        <ColorPicker 
                            style={{width: '300px', height: '60px'}}
                            selected={meuble.stroke} 
                            stroke
                            onPick={ (stroke: string) => {
                                const newShield = { ...shield }
                                newShield.meubles[idx] = {...meuble, stroke }
                                setShield(newShield)
                            }}
                        />
                    </span>
                )}
            </header>
        </div>
    )
}

export default App;
