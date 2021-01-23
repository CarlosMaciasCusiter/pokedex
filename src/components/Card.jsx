import React from 'react';
import './style.css'

function Card({pokemon}) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
            </div>
            <div className="Card__Name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {pokemon.types.map(type => <div className="Card__type">{type.type.name}</div>)}
            </div>
            <div className="Card__info">
                <div className="Card__Data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__Data Card__data--heigh">
                    <p className="title">Height</p>
                    <p>{pokemon.Height}</p>
                </div>
                <div className="Card__Data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;