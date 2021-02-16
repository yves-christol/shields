import React from 'react'
import Picker from '../../Picker'
import { pieces } from '.'
import { ShieldView } from '../index'

export type PartitionPickerProps = {
    style: any,
    selected: string,
    onPick: (partition: string) => void,
}

const PiecePicker = ({ selected, onPick }: PartitionPickerProps) => (
    <Picker selected={selected || 'or'} onPick={onPick} >
        { Object.keys(pieces).map( name => (
            <ShieldView key={name} shield={{
                owner: 'none',
                color: 'argent',
                partition: { name: 'none', color: 'argent' },
                piece: { name, color: 'sable' },
                meubles: []
            }} />
        ))}
    </Picker>
)

export default PiecePicker
