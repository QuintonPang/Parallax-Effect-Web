import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Spring, Summer, Autumn, Winter, Cat } from '/assets'
import { useRef } from 'react'
import './App.css' 

function App() {

  const center =  {display: 'flex', flexDirection: 'row',justifyContent: 'center',alignItems:'center',height:"100%"}

  const ref = useRef()

  const scrollTo = (index) =>{
    ref.current.scrollTo(index)
  }
  
  return(
    <div>
      {/* set number of pages */}
      <Parallax pages={5} ref={ref}>
        {/* speed is the speed of scrolling */}
        <ParallaxLayer onClick={()=>scrollTo(1.5)} offset={0} speed={0} factor={1} style={{backgroundImage:`url(${Spring})`,backgroundSize:'cover'}}>
          <div style={center}>
            <h1>WELCOME TO MY PAGE!</h1>
          </div>
        </ParallaxLayer>
        {/* offset means that this layer starts at second page*/}
        {/* factor means how many pages the layer spans across */}
        <ParallaxLayer onClick={()=>scrollTo(3)} factor={2} offset={1} speed={0} style={{backgroundImage:`url(${Summer})`,backgroundSize:'cover'}}>
          <div style={center}>
            <h1>IT USES THE PARALLAX EFFECT!</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer onClick={()=>scrollTo(4)} offset={3} style={{backgroundImage:`url(${Autumn})`,backgroundSize:'cover'}}>
          <div style={center}>
            <h1>ISN'T IT COOL?</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} style={{backgroundImage:`url(${Winter})`,backgroundSize:'cover'}}>
          <div style={center}>
            <h1>THANK YOU!</h1>
          </div>
        </ParallaxLayer>
        {/* sticky layer */}
        <ParallaxLayer
          sticky={{start:0.25,end:3.75}} // when to start becoming sticky and when to end
          onClick={()=>scrollTo(0)} 
          style={{textAlign:'center',height:"10%",width:"10%",left:"350px",top:"150px"}}
       >
          <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center'}}>
            <img src={Cat}/>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
  }

export default App
