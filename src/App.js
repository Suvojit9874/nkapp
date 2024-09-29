import './App.css';
import wp from "./images/WhatsApp_icon.png.webp"
import { useState } from 'react';
import { MousePadData, TshirtData ,MetalSheetData,MugData } from './data';

function App() {
  const [variable, setVariable] = useState(0)

  return (
    <>
   
    <div id="wrapper">
       <div class="wp-container">
           <a href="https://wa.me/+919674707842" target="_blank"><img class="wp-img" src={wp} width="5%" alt="WhatsApp_icon" /></a>
       </div>
       <div class="container">
           
           <h1>Nazaakat</h1>
            <div className='category'>
                <div className='cat'  onClick={()=>setVariable(0)}><h3>Tshirt</h3></div>
                <div className='cat'  onClick={()=>setVariable(1)}><h3>Coffee Mug</h3></div>
                <div className='cat'  onClick={()=>setVariable(2)}><h3>Mouse Pad</h3></div>
                <div className='cat'  onClick={()=>setVariable(3)}><h3>Others</h3></div>
            </div>
            {variable ===0 && (<>
              <div class="gallary">
                {TshirtData.map((data)=>{
                  return ( <figure class="para">
                    <img src={data.image} alt={data.image} loading="eager" />
                    {/* <figcaption>&#8377<span>59  </span><i style="{{text-decoration: line-through; font-size: 0.7rem;}}">    79<br/></i> <i style="font-size:0.7rem;">(20% off)</i></figcaption> */}
                </figure>)
                })}
              
           </div>
            </>)}
            {variable ===1 && (<>
              <div class="gallary">
                {MugData.map((data)=>{
                  return ( <figure class="para">
                    <img src={data.image} alt={data.image} loading="eager" />
                    {/* <figcaption>&#8377<span>59  </span><i style="{{text-decoration: line-through; font-size: 0.7rem;}}">    79<br/></i> <i style="font-size:0.7rem;">(20% off)</i></figcaption> */}
                </figure>)
                })}
              
           </div>
            </>)}
            {variable ===2 && (<>
              <div class="gallary">
                {MousePadData.map((data)=>{
                  return ( <figure class="para">
                    <img src={data.image} alt={data.image} loading="eager" />
                    {/* <figcaption>&#8377<span>59  </span><i style="{{text-decoration: line-through; font-size: 0.7rem;}}">    79<br/></i> <i style="font-size:0.7rem;">(20% off)</i></figcaption> */}
                </figure>)
                })}
              
           </div>
            </>)}
            {variable ===3 && (<>
              <div class="gallary">
                {MetalSheetData.map((data)=>{
                  return ( <figure class="para">
                    <img src={data.image} alt={data.image} loading="eager" />
                    {/* <figcaption>&#8377<span>59  </span><i style="{{text-decoration: line-through; font-size: 0.7rem;}}">    79<br/></i> <i style="font-size:0.7rem;">(20% off)</i></figcaption> */}
                </figure>)
                })}
              
           </div>
            </>)}
            
           
           
       </div>
   </div>
   </>
  );
}

export default App;
