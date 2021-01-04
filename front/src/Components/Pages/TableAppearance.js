import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);





const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const PokemonData = JSON.parse(localStorage.getItem('PokemonData'));

  return (
    <Grid style={{ background: "#220326", width: "100%", marginLeft: "50px", marginTop: "70px" }} container xs={12} md={12} sm={12} justify="center" alignItems="center" >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              { }
              <StyledTableCell align="center">Name</StyledTableCell>

              <StyledTableCell align="center">Types</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
              <StyledTableCell align="center">Attack</StyledTableCell>
              <StyledTableCell align="center">Defense</StyledTableCell>
              <StyledTableCell align="center">Speed</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PokemonData.map((row) => (

              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.Name}
                </StyledTableCell>
                <StyledTableCell align="center"> {row.Type2 != null ? <p>{row.Type1},{row.Type2}</p> : <p>{row.Type1}</p>}</StyledTableCell>
                <StyledTableCell align="center">{row.Total}</StyledTableCell>
                <StyledTableCell align="center">{row.Attack}</StyledTableCell>
                <StyledTableCell align="center">{row.Defense}</StyledTableCell>
                <StyledTableCell align="center">{row.Speed}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
