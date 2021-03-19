import React from 'react'


const Hello = () => {
    // return (
    //     <div className='dummyClaass'> <h1> HELLO ANANT</h1> </div>
    // )

    return React.createElement('div',{id:'hello',className:'dummy class'},
    React.createElement('h1',null, 'hello Anant'))
}

export default Hello;