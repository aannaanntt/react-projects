import React from 'react';

const Greet= (props)=>  {
    const {name,heroName} = props;
    return(

    <div>
      
 <h1>HELLO {name}&nbsp;&nbsp;&nbsp;{heroName}</h1>
    
    <div>

    <h1>{props.children}</h1>
    </div>
    
    </div>



    )

}

export default Greet;