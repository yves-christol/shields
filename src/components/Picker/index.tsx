import React, { useState } from 'react'
import Overlay from '../Overlay'
import './Picker.css'

export type PickerProps = {
    children: React.ReactNode
    selected: string | number,
    onPick: (key: string) => void,
}

const Picker = ({ children, selected, onPick }: PickerProps) => {
    const [open, setOpen] = useState(false)

    const handleClick = (key: string | number | null) => {
        if (open && key) {
            onPick(typeof key === 'number' ? key.toString() : key)
        }
        setOpen(!open)
    }

    return (
        <>
            { open ?
                <Overlay >
                    {React.Children.map(children, child => {
                        if (React.isValidElement(child) && typeof child.type === 'function') {
                            return (
                                <span 
                                    className={child.key === selected ? 'pickerItemSelected' : 'pickerItem'}
                                    onClick={ () => handleClick(child.key) }
                                >
                                    {child}
                                </span>
                            )
                        }
                    })}
                </Overlay> : ''
            }
            <span className='pickerItem' onClick={() => handleClick(null)} >
                {React.Children.map(children, child => {
                    if (React.isValidElement(child) && typeof child.type === 'function') {
                        return child.key === selected ? child : ''
                    } else {
                        return ''
                    }
                })}
            </span>
        </>
    )
}

export default Picker