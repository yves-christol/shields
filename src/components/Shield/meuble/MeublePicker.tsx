import React from 'react'
import Picker from '../../Picker'
import { meubles } from '.'
import { ShieldView } from '../index'

export type PartitionPickerProps = {
    style: any,
    selected: string,
    onPick: (partition: string) => void,
}

const MeublePicker = ({ selected, onPick }: PartitionPickerProps) => (
    <Picker selected={selected || 'or'} onPick={onPick} >
        { Object.keys(meubles).map( name => (
            <ShieldView key={name} shield={{
                owner: 'none',
                color: 'argent',
                partition: { name: 'none', color: 'argent' },
                piece: { name: 'none', color: 'argent' },
                meubles: [{name, color: 'sable', stroke: 'sable', position: 'r1'}]
            }} />
        ))}
    </Picker>
)

export default MeublePicker
