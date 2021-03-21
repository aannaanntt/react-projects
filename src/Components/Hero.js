import React from 'react'

function Hero({heroName}){
    if(heroName === 'Heath'){
        throw new Error('Why so Serious 🃏')
    }
    return (
        <div>
                {heroName}
        </div>
    )
}

export default Hero;