import {useState} from 'react'
import "./Result"
import Results from './Result';
import "./Input.css"


function Kelvin_Converter(props) {
    const [kelvin, setKelvin] = useState(0);

    const toCelvin = ()=>{
        setKelvin(props.cel + 273.15) 
    }
  return (
    <>
        <button style={{width: 300, height: 30}} onClick={toCelvin}>Convert to Celvin</button><br/>
        <Results res = {kelvin} type = "k"/>
    </>
  )
}

export default Kelvin_Converter