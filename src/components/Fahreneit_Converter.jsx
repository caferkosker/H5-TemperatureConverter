import {useState} from 'react'
import Results from './Result.jsx';
import "./Input.css"

function Fahreneit_Converter(props) {
    const [fahreneit, setFahreneit] = useState(0);

    const toFahreneit = ()=>{
        setFahreneit((props.cel * 9/5) + 32) 
    }
  return (
    <>
        <button style={{width: 300, height: 30}} onClick={toFahreneit}>Convert to Fahreneit</button>
        <div className='conta'>
        <Results res = {fahreneit} type = "f"/>
        </div>

    </>
  )
}

export default Fahreneit_Converter