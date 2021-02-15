import type { Position } from '../types'

export const positions: Position[] = [
    { name: 'r1', dx: -8, dy: -8, sc: .4, fbd:
      ['r1', 'p1', 'c1', 'b1', 'b2', 'b3', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7',
       's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11',
       's12', 's13', 'y1', 'y2', 'y3', 'y4']
    },
    { name: 'p1', dx: -4.8, dy: -4.8, sc: 0.24, fbd:
      ['r1', 'p1', 'c1', 'b1', 'b2', 'b3', 'g2', 'g4', 'g5', 'g6', 'g7',
       's6', 's7', 's9', 's10', 's11', 'y2', 'y3']
    },
    { name: 'c1', dx: -4.8, dy: -10.8, sc: 0.24, fbd:
      ['r1', 'p1', 'c1', 'b1', 'b2', 'g1', 'g2', 'g3', 'g5',
       's2', 's3', 's6', 's7',
       'y1', 'y2']
    },
    { name: 'b1', dx: -10.8, dy: -10.8, sc: 0.24, fbd:
      ['r1', 'p1', 'c1', 'b1', 'g1', 'g2', 'g4', 'g5',
       's1', 's2', 's5', 's6', 'y1', 'y2']
    },
    { name: 'b2', dx: 1.2, dy: -10.8, sc: 0.24, fbd:
      ['r1', 'p1', 'c1', 'b2', 'g2', 'g3', 'g5', 'g6',
       's3', 's4', 's7', 's8', 'y1', 'y2']
    },
    { name: 'b3', dx: -4.8, dy: 1.2, sc: 0.24, fbd:
      ['r1', 'p1', 'b3', 'g5', 'g7', 's9', 's10', 's11',
       's12', 's13', 'y3', 'y4']
    },
    { name: 'g1', dx: -11.52, dy: -11.52, sc: 0.176, fbd:
      ['r1', 'c1', 'b1', 'g1', 's1', 's2', 's5']
    },
    { name: 'g2', dx: -3.52, dy: -11.52, sc: 0.176, fbd:
      ['r1', 'p1', 'c1', 'b1', 'b2', 'g2', 's2', 's3', 's6', 's7', 'y1', 'y2']
    },
    { name: 'g3', dx: 4.48, dy: -11.52, sc: 0.176, fbd:
      ['r1', 'c1', 'b2', 'g3', 's3', 's4', 's8']
    },
    { name: 'g4', dx: -11.52, dy: -3.52, sc: 0.176, fbd:
      ['r1', 'p1', 'b1', 'g4', 's5', 's6', 's9']
    },
    { name: 'g5', dx: -3.52, dy: -3.52, sc: 0.176, fbd:
      ['r1', 'p1', 'c1', 'b1', 'b2', 'b3', 'g5', 's6', 's7', 's10', 'y2', 'y3']
    },
    { name: 'g6', dx: 4.48, dy: -3.52, sc: 0.176, fbd:
      ['r1', 'p1', 'b2', 'g6', 's7', 's8', 's11']
    },
    { name: 'g7', dx: -3.52, dy: 4.48, sc: 0.176, fbd:
      ['r1', 'p1', 'b3', 'g7', 's10', 's12', 's13', 'y3', 'y4']
    },
    { name: 's1', dx: -11.4, dy: -11.4, sc: 0.12, fbd:
      ['r1', 'b1', 'g1', 's1']
    },
    { name: 's2', dx: -5.4, dy: -11.4, sc: 0.12, fbd:
      ['r1', 'c1', 'b1', 'g1', 'g2', 's2', 'y1']
    },
    { name: 's3', dx: 0.6, dy: -11.4, sc: 0.12, fbd:
      ['r1', 'c1', 'b2', 'g2', 'g3', 's3', 'y1']
    },
    { name: 's4', dx: 6.6, dy: -11.4, sc: 0.12, fbd:
      ['r1', 'b2', 'g3', 's4']
    },
    { name: 's5', dx: -11.4, dy: -5.4, sc: 0.12, fbd:
      ['r1', 'b1', 'g1', 'g4', 's5']
    },
    { name: 's6', dx: -5.4, dy: -5.4, sc: 0.12, fbd:
      ['r1', 'c1', 'p1', 'b1', 'g2', 'g4', 'g5', 's6', 'y2']
    },
    { name: 's7', dx: 0.6, dy: -5.4, sc: 0.12, fbd:
      ['r1', 'c1', 'p1', 'b2', 'g2', 'g5', 'g6', 's7', 'y2']
    },
    { name: 's8', dx: 6.6, dy: -5.4, sc: 0.12, fbd:
      ['r1', 'b2', 'g3', 'g6', 's8']
    },
    { name: 's9', dx: -8.4, dy: 0.6, sc: 0.12, fbd:
      ['r1', 'p1', 'b3', 'g4', 's9']
    },
    { name: 's10', dx: -2.4, dy: 0.6, sc: 0.12, fbd:
      ['r1', 'p1', 'b3', 'g5', 'g7', 's10', 'y3']
    },
    { name: 's11', dx: 3.6, dy: 0.6, sc: 0.12, fbd:
      ['r1', 'p1', 'b3', 'g6', 's11']
    },
    { name: 's12', dx: -5.4, dy: 6.6, sc: 0.12, fbd:
      ['r1', 'b3', 'g7', 's12', 'y3', 'y4']
    },
    { name: 's13', dx: 0.6, dy: 6.6, sc: 0.12, fbd:
      ['r1', 'b3', 'g7', 's13', 'y3', 'y4']
    },
    { name: 'y1', dx: -2.4, dy: -11.4, sc: 0.12, fbd:
      ['r1', 'c1', 'b1', 'b2', 'g2', 's2', 's3', 'y1']
    },
    { name: 'y2', dx: -2.4, dy: -5.4, sc: 0.12, fbd:
      ['r1', 'c1', 'p1', 'b1', 'b2', 'g2', 'g5', 's6', 's7', 'y2']
    },
    { name: 'y3', dx: -2.4, dy: 0.6, sc: 0.12, fbd:
      ['r1', 'p1', 'b3', 'g5', 'g7', 's10', 's12', 's13', 'y3']
    },
    { name: 'y4', dx: -2.4, dy: 6.6, sc: 0.12, fbd:
      ['r1', 'b3', 'g7', 's12', 's13', 'y4']
    }
]
  
// return the svg translate value for a named position
export function transform(name: string):string {
    const position = positions.filter((d) => d.name === name)[0]
    const transfo = `translate(${position.dx}, ${position.dy}) scale(${position.sc})`
    return transfo
}

// return an array of the valid positions left for a given array of getDispos
export function leftPositions(positionList: string[]) {
    let left = positions
    if (positionList.length > 0) {
        left = positions.filter((d) => positionList.every((n) => !d.fbd.includes(n)))
    }
    return left.map((d) => d.name)
}

// return a random position name
export function randomPosition(positionList: string[] = []) {
    const ld = leftPositions(positionList);
    return (ld.length > 0 && Math.floor(Math.random() * Math.random() * 13) + 1 > positionList.length) ?
            ld[Math.floor(Math.random() * (positionList.length === 0 ? 13 : ld.length))] : ''
}

