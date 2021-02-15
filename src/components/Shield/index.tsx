import React from 'react'
import type { ShieldProps } from './types'
import * as color from './color'
import * as partition from './partition'
import * as piece from './piece'
import * as meuble from './meuble'
import * as position from './position'

const shieldPath = 'M 0,0 m -12,-12 h24 v12 C 12,10 0,15 0,15 C 0,15, -12,10 -12,0 z'

export const ShieldView = ( props: ShieldProps) => (
    <svg viewBox="-13 -13 26 29">
        <defs>
            <radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="-4" cy="-4" r="20">
                <stop stopColor='#fff' stopOpacity='0.31' offset='0%'/>
                <stop stopColor='#fff' stopOpacity='0.25' offset='19%'/>
                <stop stopColor='#6b6b6b' stopOpacity='0.12' offset='60%'/>
                <stop stopColor='#000' stopOpacity='0.12' offset='100%'/>
            </radialGradient>
        </defs>
        <path d={shieldPath} style={{fill: color.code(props.shield.color), strokeWidth: '0'}} />
        { props.shield.partition ? 
            <path d={partition.path(props.shield.partition.name)}  style={{fill: color.code(props.shield.partition.color)}} /> : ''
        }
        { props.shield.piece ? 
            <path d={piece.path(props.shield.piece.name)}  style={{fill: color.code(props.shield.piece.color)}} /> : ''
        }
        { props.shield.meubles ? props.shield.meubles.map( m =>
            <path key={m.position} d={meuble.path(m.name)}
                style={{fill: color.code(m.color), stroke: color.code(m.stroke), strokeWidth: '0.3'}}
                transform={position.transform(m.position)}
            />) : ''
        }
        { props.shine ?
            < path d={shieldPath}
                style={{fill: 'url(#grad)', stroke: '#000', strokeWidth: '0.3'}}
            /> : ''
        }
    </svg>    
)

/*
    <svg viewBox="-13 -13 26 29">
        <defs>
            <radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="-4" cy="-4" r="20">
                <stop stopColor='#fff' stopOpacity='0.31' offset='0%'/>
                <stop stopColor='#fff' stopOpacity='0.25' offset='19%'/>
                <stop stopColor='#6b6b6b' stopOpacity='0.12' offset='60%'/>
                <stop stopColor='#000' stopOpacity='0.12' offset='100%'/>
            </radialGradient>
            <pattern id="shieldpattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse" >
                <circle cx="2" cy="2" r="1.5" style={{fill: '#ff0', stroke: 'none'}} />
            </pattern>
        </defs>
        <path d={shieldPath} style={{fill: getColor(props.shieldColor), strokeWidth: '0'}} />
        {props.shieldPattern ?
        <path d={shieldPath} style={{fill: 'url(#shieldpattern)', strokeWidth: '0'}} /> :
        ''
        }
        <path d={getPartition(props.partition)}  style={{fill: getColor(props.partitionColor)}} />
        <path d={getPiece(props.piece)}  style={{fill: getColor(props.pieceColor)}} />
        {props.meubles ? props.meubles.map((m) =>
        <path key={m.dispo} d={getMeuble(m.name)}
            style={{fill: getColor(m.color), stroke: getColorComp(m.color), strokeWidth: '0.3'}}
            transform={getTransfo(m.dispo, 0)}
        />) :
        ''
        }
        < path d={shieldPath}
            style={{fill: 'url(#grad)', stroke: '#000', strokeWidth: '0.3'}}
        />
    </svg>    

*/