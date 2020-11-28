import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Image } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Paper } from '@material-ui/core';


import logo192 from '../logo192.png';

import Pokemonlogo from '../img/Pokemonlogo.png';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "200px",
    height:"200px",
    lignContent:"center",
    backgroundColor:theme.palette.primary.main,
    borderRadius:"20px"
   
  },
  header:{
    height:"10px",
   
    paddingTop:"2px"
  },
  coontent:{

  },

  paperContainer:{
    height:"70px",
    width:"180px",
    boxShadow:"none",
    // marginTop:"5px",
    // marginLeft:"15px",
    // marginRight:"10px",
    // marginBottom:"10px",
    backgroundImage:`url(${Pokemonlogo})`,
    backgroundPosition:"center",
    backgroundOrigin:"content-box",
    backgroundSize:"cover",
    backgroundColor:theme.palette.primary.main,
    backgroundRepeat:"no-repeat",
    opacity:'0.2',
   
  },
  Text:{
    opacity:'1',
    color:theme.palette.secondary.main
  },
  // media: {
  //   height: 0,
    
  //   paddingTop: '56.25%', // 16:9
  // },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },

}));

export default function PokemonCards({pid,pname}) {

  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
     
    <Card className={classes.root}>
      <Grid  className={classes.header}>
        <Typography className={classes.Text}>{pname}</Typography>
      </Grid>
      {/* <CardHeader 
      classNAme={classes.header}
     
        title={pname}

        
      /> */}
      
      <CardContent>
          
        <Paper className={classes.paperContainer}>
        </Paper>
        <Grid style={{top:"-50px" ,position:"relative"}}>
          <Typography  className={classes.Text}>
          {pid}

          </Typography>
          

        </Grid>
      {/* <logo192/> */}
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
          {/* <Typography paragraph>Method:</Typography> */}
          {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography> */}
          
      
         
        </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
