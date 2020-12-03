import React from 'react'
import PokemonCard from '../PokemonCards'
import '../../App.css';
import Test2 from '../test2';
import { Grid } from '@material-ui/core';
function Home() {
    const data=[{"id":1,"Name":"Bulbasaur","Type1":"Grass","Type2":"Poison","Total":318,"HP":45,"Attack":49,"Defense":49,"Sp# Atk":65,"Sp# Def":65,"Speed":45,"Generation":1,"Legendary":false},
    {"id":2,"Name":"Ivysaur","Type1":"Grass","Type2":"Poison","Total":405,"HP":60,"Attack":62,"Defense":63,"Sp# Atk":80,"Sp# Def":80,"Speed":60,"Generation":1,"Legendary":false},
    {"id":3,"Name":"Venusaur","Type1":"Grass","Type2":"Poison","Total":525,"HP":80,"Attack":82,"Defense":83,"Sp# Atk":100,"Sp# Def":100,"Speed":80,"Generation":1,"Legendary":false},
    {"id":4,"Name":"VenusaurMega Venusaur","Type1":"Grass","Type2":"Poison","Total":625,"HP":80,"Attack":100,"Defense":123,"Sp# Atk":122,"Sp# Def":120,"Speed":80,"Generation":1,"Legendary":false},
    {"id":5,"Name":"Charmander","Type1":"Fire","Total":309,"HP":39,"Attack":52,"Defense":43,"Sp# Atk":60,"Sp# Def":50,"Speed":65,"Generation":1,"Legendary":false},
    {"id":6,"Name":"Charmeleon","Type1":"Fire","Total":405,"HP":58,"Attack":64,"Defense":58,"Sp# Atk":80,"Sp# Def":65,"Speed":80,"Generation":1,"Legendary":false},
    {"id":7,"Name":"Charizard","Type1":"Fire","Type2":"Flying","Total":534,"HP":78,"Attack":84,"Defense":78,"Sp# Atk":109,"Sp# Def":85,"Speed":100,"Generation":1,"Legendary":false},
    {"id":8,"Name":"CharizardMega Charizard X","Type1":"Fire","Type2":"Dragon","Total":634,"HP":78,"Attack":130,"Defense":111,"Sp# Atk":130,"Sp# Def":85,"Speed":100,"Generation":1,"Legendary":false},
    {"id":9,"Name":"CharizardMega Charizard Y","Type1":"Fire","Type2":"Flying","Total":634,"HP":78,"Attack":104,"Defense":78,"Sp# Atk":159,"Sp# Def":115,"Speed":100,"Generation":1,"Legendary":false},
    {"id":10,"Name":"Squirtle","Type1":"Water","Total":314,"HP":44,"Attack":48,"Defense":65,"Sp# Atk":50,"Sp# Def":64,"Speed":43,"Generation":1,"Legendary":false},
    {"id":11,"Name":"Wartortle","Type1":"Water","Total":405,"HP":59,"Attack":63,"Defense":80,"Sp# Atk":65,"Sp# Def":80,"Speed":58,"Generation":1,"Legendary":false},
    {"id":12,"Name":"Blastoise","Type1":"Water","Total":530,"HP":79,"Attack":83,"Defense":100,"Sp# Atk":85,"Sp# Def":105,"Speed":78,"Generation":1,"Legendary":false},
    {"id":13,"Name":"BlastoiseMega Blastoise","Type1":"Water","Total":630,"HP":79,"Attack":103,"Defense":120,"Sp# Atk":135,"Sp# Def":115,"Speed":78,"Generation":1,"Legendary":false},
    {"id":14,"Name":"Caterpie","Type1":"Bug","Total":195,"HP":45,"Attack":30,"Defense":35,"Sp# Atk":20,"Sp# Def":20,"Speed":45,"Generation":1,"Legendary":false},
    {"id":15,"Name":"Metapod","Type1":"Bug","Total":205,"HP":50,"Attack":20,"Defense":55,"Sp# Atk":25,"Sp# Def":25,"Speed":30,"Generation":1,"Legendary":false},
    {"id":16,"Name":"Butterfree","Type1":"Bug","Type2":"Flying","Total":395,"HP":60,"Attack":45,"Defense":50,"Sp# Atk":90,"Sp# Def":80,"Speed":70,"Generation":1,"Legendary":false},
    {"id":17,"Name":"Weedle","Type1":"Bug","Type2":"Poison","Total":195,"HP":40,"Attack":35,"Defense":30,"Sp# Atk":20,"Sp# Def":20,"Speed":50,"Generation":1,"Legendary":false},
    {"id":18,"Name":"Kakuna","Type1":"Bug","Type2":"Poison","Total":205,"HP":45,"Attack":25,"Defense":50,"Sp# Atk":25,"Sp# Def":25,"Speed":35,"Generation":1,"Legendary":false},
    {"id":19,"Name":"Beedrill","Type1":"Bug","Type2":"Poison","Total":395,"HP":65,"Attack":90,"Defense":40,"Sp# Atk":45,"Sp# Def":80,"Speed":75,"Generation":1,"Legendary":false},
    {"id":20,"Name":"BeedrillMega Beedrill","Type1":"Bug","Type2":"Poison","Total":495,"HP":65,"Attack":150,"Defense":40,"Sp# Atk":15,"Sp# Def":80,"Speed":145,"Generation":1,"Legendary":false}]
    return (
         <Grid style={{background:"#220326",width:"100%",marginLeft:"20px",marginTop:"70px"}}container xs={12} md={12} sm={12} justify="center" alignItems="center" >

            {/* <Grid item xs={10} sm={12} md={12} justify="center" >
                
            </Grid> */}
            {data.map((item)=>(
                // <PokemonCards pid={item.id} pname={item.Name}/>
                <PokemonCard pid={item.id} pname={item.Name} ptype1={item.Type1} ptype2={item.Type2}
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
