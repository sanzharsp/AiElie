
import './styles.css'
import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'
import { Avatar } from 'antd';
import url from '../../assets/ava.png'
import { useEffect } from 'react';
import MeshGradient from 'mesh-gradient.js';


const COLORS =   [
"#eb75b6",
"#ddf3ff",
"#6e3deb",
"#c92f3c",

]

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

    const Trail2 = ({ open, children }) => {
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
            <a.div key={index} className="trailsText2" style={style}>
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      )
    }
    

export default function Animations() {
 
  const gradient = new MeshGradient();
  const canvasId = "my-canvas"

  useEffect(() => {
    // initialize new gradient
    // @Params
    // 1. id of canvas elememt
    // 2. array of colors in hexcode
    gradient.initGradient("#" + canvasId, COLORS) 
    // Mesh Id 
    // Any positive numeric value which acts as a seed for mesh pattern
    gradient?.changePosition(780); 
  }, [])


      const [open, set] = useState(true)
      setTimeout(()=>set(!open), 4000);
      return (
        <>

  
        <div className="container" >
        <canvas id={canvasId} style={{ width:'100%',height:'113%', zIndex:-1000,position:'absolute'}}/>
          <div style={{padding:10}}>
        <Trail2 open={open}>
        <Avatar className="avatar" src={<img src={url}  />} />
        </Trail2>
        </div>
        
          <Trail open={open}>
            <span style={{color:'red',   
        borderBottom: '2px solid black',
        borderRadius: '0 0 10px 10px',
        paddingBottom: '5px',
        display: 'inline-block'
      }}>CREATED</span>
            <span >BY</span>
            <span style={{color:'red',   
        borderBottom: '2px solid black',
        borderRadius: '0 0 10px 10px',
        paddingBottom: '5px',
        display: 'inline-block'
      }}>ELIZAT</span>
            <span>DAULETOVA</span>
          </Trail>
   
        </div>
      
        </>
      )
    }
    