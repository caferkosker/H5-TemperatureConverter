import {useState} from 'react'
import "./Input.css"
import Kelvin_Converter from './Kelvin_Converter'
import Fahreneit_Converter from './Fahreneit_Converter';

function Input() {
  const [celcius, setCelcius] = useState(0);
  const toFloat = (e) =>{
    setCelcius(parseFloat(e.target.value));
  }
  return (
    <>
    <label id = "label1" for="fname"  >Enter a Celcius Temperature</label><br/>
        <input type="number" id="fname" name="fname" placeholder='Celcius' value={celcius} onChange={toFloat}/><br/>
    < div className = "cont">
        
        <Kelvin_Converter className="btn" cel = {celcius} />
        <Fahreneit_Converter className="btn" cel = {celcius} />
    </div>   
    </> 
  )
}

export default Input