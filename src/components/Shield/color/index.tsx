import type { Color } from '../types'

export const colors: Record<string, Color> = {
    'sable': { code: '#000000', metal: false, brightness: 'low' },
    'argent': { code: '#ffffff', metal: true, brightness: 'high' },
    'or': { code: '#ffee00', metal: true, brightness: 'high' },
    'fer': { code: '#999999', metal: true, brightness: 'medium' },
    'azure': { code: '#0000ff', metal: false, brightness: 'low' },
    'gules': { code: '#ff0000', metal: false, brightness: 'medium' },
    'sinople': { code: '#00cc44', metal: false, brightness: 'medium' },
    'purpure': { code: '#990099', metal: false, brightness: 'medium' },
    'orange': { code: '#ff7900', metal: false, brightness: 'high' },
    'tenny': { code: '#886644', metal: false, brightness: 'medium' },
    'rose': { code: '#ffaabb', metal: false, brightness: 'high' },
    'sky': { code: '#99bbff', metal: false, brightness: 'high' },
    'pine': { code: '#355520', metal: false, brightness: 'low' },
    'wine': { code: '#902020', metal: false, brightness: 'low' },
}

export const code = (name: string): string => {
    return colors[name] ? colors[name].code : '#666'
}

export const metal = (name: string): boolean => {
    return colors[name].metal
}

export const brightness = (name: string): 'low' | 'medium' | 'high' => {
    return colors[name] ? colors[name].brightness : 'medium'
}
