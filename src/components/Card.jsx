import React from 'react';
import typeColors from "../helpers/pokemonTypes"
import './Card.css'

function Card({pokemon}) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="pokemon"/>
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {pokemon.types.map((type, index) => <div className="Card__type" key={index} style={{ backgroundColor : typeColors[type.type.name] }}>{type.type.name}</div>)}
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{(pokemon.weight / 4.536).toFixed(1)} lbs</p>
                </div>
                <div className="Card__data Card__data--height">
                    <p className="title">Height</p>
                    <p>{(pokemon.height / 3.048).toFixed(1)} ft</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    {pokemon.abilities.map((ability, index) => <span>{ability.ability.name} </span>)}
                </div>
            </div>
        </div>
    )
}

export default Card;