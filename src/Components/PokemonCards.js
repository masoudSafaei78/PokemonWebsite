import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../Styles/PokemonCardStyle.scss';
import { ButtonBase } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

function Alert(props) {
  return <MuiAlert style={{fontSize:'40px',height:"40px"}} elevation={8} variant="filled" {...props} />;
}
function PokemonCard({ pid, pname, ptype1, ptype2, ptotal, pAttack, pDefense, pSpeed, pLegendary }) {
  const [open, setOpen] = React.useState(false);
  // const legen
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div class="artboard" onClick={handleClick}>
      {open? <Snackbar bodyStyle={{ backgroundColor: 'teal', color: 'coral' }} open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert  onClose={handleClose} severity="success">
          <text style={{fontSize:"15px"}}> Added to favorites</text>
         
        </Alert>
      </Snackbar>:null}
      
      {/* <Snackbar
      style={{}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',

        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        style={{ fontSize: "5rem" }}
        message="Added to favorits"
        action={
          <React.Fragment>
            <Button color="secondary" size="large" onClick={handleClose} style={{ fontSize: "13px" }}>
              UNDO
            </Button>
            <IconButton size="large" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </React.Fragment> */}
        {/* }
      /> */}
      <div class="card">

        <div class="card__side card__side--back">
          <div class="card__cover">
            <h4 class="card__heading">
              <span class="card__heading-span">Skills</span>
            </h4>
          </div>
          <div class="card__details">
            <ul>

              <li>Types:
              {ptype2!=null?<p>{ptype1},{ptype2}</p>:<p>{ptype1}</p>}
              
              {/* <p>{ptype1},{ptype2}</p>  */}
              </li>
              <li>Total:{ptotal}</li>
              <li>Attack:{pAttack}</li>
              <li>Defense:{pDefense}</li>
              <li>Speed:{pSpeed}</li>
         <p/>
              {pLegendary?<li style={{marginTop:"20px",backgroundColor:"Gold"}}>Legendary</li>:null}
              
            </ul>
          </div>
        </div>

        <div class="card__side card__side--front">
          <div class="card__theme">
            <div class="card__theme-box">
              <p class="card__subject">Bowerlas</p>
              <p class="card__subject">{pid}</p>
              <p class="card__title">{pname}</p>
              {/* <p><FavoriteIcon fontSize="large"/></p> */}
            </div>
            {/* <div style={{float:"left"}}>
            <ButtonBase>
          <FavoriteIcon fontSize="large"/>

            </ButtonBase>
           </div> */}
          </div>
        </div>


      </div>
    </div>
  )
}

export default PokemonCard
