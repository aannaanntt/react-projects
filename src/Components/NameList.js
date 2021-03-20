import React from 'react'
import Persons from './Persons';


function NameList(){
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
            <Persons person={person}></Persons>
        ))


    return (
      <div>{personsList}</div>
    )
}

export default NameList;