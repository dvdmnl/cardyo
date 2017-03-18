/**
 * Created by David on 3/15/2017.
 */
import React from 'react'
import { DemoCard } from './../StaticData/StaticData'

const Card = ({match}) => {
    const wazeLink = `waze://?q=${DemoCard.address}`;
    console.log(DemoCard);
        return (
            <div>
                <p>Card: {match.params.userName}</p>
                <a href={wazeLink} target="_blank">Open in Waze</a>
            </div>
        )
}
export default Card