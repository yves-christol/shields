import React, { useEffect } from 'react'
import './Overlay.css'

export type OverlayProps = { 
    children: React.ReactNode
}

const Overlay = ( { children }: OverlayProps ) => {

    useEffect( () => {
        const body = document.body;
        const overlay = document.querySelector('.overlay')
        if (overlay) {
          overlay.setAttribute('aria-hidden', 'false')
          overlay.scrollTop = 0;
        }
        if (body) {
          body.classList.toggle('noscroll', true)
        }
        return () => {
            const overlay = document.querySelector('.overlay');
            if (overlay) {
              overlay.setAttribute('aria-hidden', 'true')
            }
            if (body) {
              body.classList.toggle('noscroll', false)
            }        
        }
    })

    return (
        <div className='overlay'> 
            {React.Children.map(children, child => child)}
        </div>
    )
}

export default Overlay