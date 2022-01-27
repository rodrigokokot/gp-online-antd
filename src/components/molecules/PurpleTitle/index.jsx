import React from 'react';

function PurpleTitle({text}) {
  return (<h1 
    style={{fontStyle:"normal", 
            fontWeight:"bold", 
            fontSize:"28px", 
            lineHeight:"34px", 
            display:"flex", 
            alignItems:"center", 
            letterSpacing:"-0.02em", 
            color:"#AB218E"}}>
                {text}
            </h1>);
}

export default PurpleTitle