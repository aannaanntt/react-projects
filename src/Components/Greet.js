import React from 'react';

const Greet= (props)=>  {
    console.log(props);
    return(

    <div>
      
 <h1>HELLO {props.name}&nbsp;&nbsp;&nbsp;{props.heroName}</h1>
    
    <div>

    <h1>{props.children}</h1>
    </div>
    
    </div>



    )

}

export default Greet;