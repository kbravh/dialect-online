import React from 'react'
import Legacy from './Legacy'
import Archetype from './Archetype'
import Story1 from './Story1'
import Story2 from './Story2'
import Story3 from './Story3'

const Card = ({card}) => {
    switch(card.type){
        case "legacy":
            return <Legacy card={card} />
        case "archetype":
            return <Archetype card={card} />
        case "story1":
            return <Story1 card={card} />
        case "story2":
            return <Story2 card={card} />
        case "story3":
            return <Story3 card={card} />
        default:
            return null
    }
}

export default Card