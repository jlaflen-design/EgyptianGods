import React from 'react';

const Aspects = (props) => {

    let aspectType = props.type;

    return (
           
        <><div className={`aspect ${aspectType}`}>{props.name}</div></>
        
    )
    }
    
    export default Aspects