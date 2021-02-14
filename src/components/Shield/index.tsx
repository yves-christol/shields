import React from 'react'
import { Color } from '../Color'

const shieldPath = 'M 0,0 m -12,-12 h24 v12 C 12,10 0,15 0,15 C 0,15, -12,10 -12,0 z'

export type Partition = {
    name: string,
    path: string,
//    patterns: Pattern[],
}

export type Shield = {
    owner: string,
    devise: string,
    color: Color,
    partition?: Partition,
//    piece?: Piece,
}

export const ShieldView = (props: {color: Color}) => (
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
        <path d={shieldPath} style={{fill: props.color.code, strokeWidth: '0'}} />
        < path d={shieldPath}
            style={{fill: 'url(#grad)', stroke: '#000', strokeWidth: '0.3'}}
        />
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