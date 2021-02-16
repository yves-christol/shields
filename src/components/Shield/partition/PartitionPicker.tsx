import React from 'react'
import Picker from '../../Picker'
import { partitions } from '.'
import { ShieldView } from '../index'

export type PartitionPickerProps = {
    style: any,
    selected: string,
    onPick: (partition: string) => void,
}

const PartitionPicker = ({ selected, onPick }: PartitionPickerProps) => (
    <Picker selected={selected || 'or'} onPick={onPick} >
        { Object.keys(partitions).map( name => (
            <ShieldView key={name} shield={{
                owner: 'none',
                color: 'argent',
                partition: { name, color: 'sable' },
                piece: { name: 'none', color: 'argent' },
                meubles: []
            }} />
        ))}
    </Picker>
)

export default PartitionPicker
