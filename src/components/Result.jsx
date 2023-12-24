import React from 'react'

function Results(props) {

    if (props.type == "k"){
        return (
            <p style={{color:"black"}}>{props.res} °K</p>
        )
    } 
    if (props.type == "f"){
        return (
            <p style={{color:"black"}}>{props.res} °F</p>
        )
    }    
            
    
}

export default Results