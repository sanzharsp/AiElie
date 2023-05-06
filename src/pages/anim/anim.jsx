
import './styles.css'
import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'
    

    
const Trail = ({ open, children }) => {
      const items = React.Children.toArray(children);
  
      const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
      })
      return (
        <div>
          {trail.map(({ height, ...style }, index) => (
            <a.div key={index} className="trailsText" style={style}>
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      )
    }
    
export default function Animations() {
      const [open, set] = useState(true)
      setTimeout(()=>set(!open), 4000);
      return (
        
        <div className="container" >
          <Trail open={open}>
            <span style={{color:'red'}}>CREATED</span>
            <span >BY</span>
            <span style={{color:'red'}}>ELIZAT</span>
            <span>DAULETOVA</span>
          </Trail>
        </div>
      )
    }
    