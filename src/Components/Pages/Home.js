import React from 'react'
import PokemonCards from '../PokemonCards'
import '../../App.css';
function Home() {
    const data=[{"id":1,"Name":"Bulbasaur","Type 1":"Grass","Type 2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false},
    {"id":2,"Name":"Bulbasaur","Type 1":"Grass","Type 2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false},
    {"id":2,"Name":"Bulbasaur","Type 1":"Grass","Type 2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false},
    {"id":2,"Name":"Bulbasaur","Type 1":"Grass","Type 2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false}]
    return (
        <div >
            {data.map((item)=>(
                <PokemonCards pid={item.id} pname={item.Name}/>
                
                ))}
        </div>
    )
}

export default Home
