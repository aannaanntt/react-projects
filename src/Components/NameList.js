import React from 'react'
import Persons from './Persons';


function NameList(){
    const names= ['Bruce','Clark','Heath'];
    const persons=[
        
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'

        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Heath',
            age:26,
            skill:'Spring Boot'
        }
    
    
    ]
    const personsList=  persons.map((person)=>(
            <Persons key={person.id} person={person}></Persons>
        ))

        const nameList = names.map((names,index)=> <h2 key ={index}>{index} {names}</h2>)

    return (
     <div>
          {/* <div>{personsList}</div> */}
            <div>{nameList}</div>
     </div>
    )
}

export default NameList;