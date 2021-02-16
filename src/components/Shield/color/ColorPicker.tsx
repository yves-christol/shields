import React from 'react'
import Picker from '../../Picker'
import { colors } from '.'
import { ShieldView } from '../index'

export type ColorPickerProps = {
    style?: any,
    selected: string,
    onPick: (color: string) => void,
    stroke?: boolean,
}

const ColorPicker = ({ selected, onPick, stroke }: ColorPickerProps) => (
    <Picker selected={selected || 'or'} onPick={onPick} >
        { Object.keys(colors).map( color => (
            <ShieldView key={color} shield={{
                owner: 'none',
                color,
                partition: { name: 'none', color: 'argent' },
                piece: { name: stroke ? 'border' : 'none', color: 'argent' },
                meubles: []
            }} />
        ))}
    </Picker>
)

export default ColorPicker