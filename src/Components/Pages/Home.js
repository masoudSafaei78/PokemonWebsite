import React from 'react'
import PokemonCard from '../PokemonCards'
import '../../App.css';
import Test2 from '../test2';
import { Grid } from '@material-ui/core';
function Home() {
    const data=[{"id":1,"Name":"Bulbasaur","Type_1":"Grass","Type_2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":true},
    {"id":2,"Name":"Bulbasaur","Type_1":"Grass","Type_2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false},
    {"id":3,"Name":"Bulbasaur","Type_1":"Grass","Type_2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false},
    {"id":4,"Name":"Bulbasaur","Type_1":"Grass","Type_2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false}]
    return (
         <Grid container xs={12} md={12} sm={12} justify="center" alignItems="center" >

            {/* <Grid item xs={10} sm={12} md={12} justify="center" >
                
            </Grid> */}
            {data.map((item)=>(
                // <PokemonCards pid={item.id} pname={item.Name}/>
                <PokemonCard pid={item.id} pname={item.Name} ptype1={item.Type_1} ptype2={item.Type_2}
                ptotal={item.Total} pAttack={item.Attack} pDefense={item.Defense} pSpeed={item.Speed} pLegendary={item.Legendary} />
                ))}
             
        </Grid>
        // <Grid container direction="column" md={4} >
        //     <Grid item>
        //     {data.map((item)=>(
        //         // <PokemonCards pid={item.id} pname={item.Name}/>
        //         <Test2/>
        //         ))}
        // </Grid>
        // </Grid>
    )
}

export default Home
