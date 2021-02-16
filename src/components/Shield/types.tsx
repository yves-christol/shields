export type Color = {
    metal: boolean,
    brightness: 'low' | 'medium' | 'high',
    code: string,
}

export type Position = {
    name: string,
    dx: number, dy: number, sc: number,
    fbd: string[]
}

export type Partition = {
    name: string,
    color: string,
}

export type Piece = {
    name: string,
    color: string,
}

export type Meuble = {
    name: string,
    color: string,
    stroke: string,
    position: string,
}

export type Shield = {
    owner: string,
    color: string,
    partition: Partition,
    piece: Piece,
    meubles: Meuble[]
}

export type ShieldViewProps = {
    shield: Shield,
    shine?: boolean,
    glow?: boolean,
}
