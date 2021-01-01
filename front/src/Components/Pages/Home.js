import React, { useEffect, useState } from 'react'
import PokemonCard from '../PokemonCards'
import '../../App.css';
import Test2 from '../test2';
import { Grid } from '@material-ui/core';
function Home() {
    const [pokemonData,setPokemonData] = useState([])
   const PokemonData= JSON.parse(localStorage.getItem('PokemonData')) ;
  
    return (
         <Grid style={{background:"#220326",width:"100%",marginLeft:"20px",marginTop:"70px"}}container xs={12} md={12} sm={12} justify="center" alignItems="center" >

   
            {PokemonData.map((item)=>(
                <PokemonCard pid={item.id} pname={item.Name} ptype1={item.Type1} ptype2={item.Type2}
                ptotal={item.Total} pAttack={item.Attack} pDefense={item.Defense} pSpeed={item.Speed} pLegendary={item.Legendary} />
                ))}
             
        </Grid>
      
    )
}

export default Home
