import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, types, total, attack, defense, speed) {
  return { name, types, total, attack, defense, speed };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 5.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0, 7.0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 8.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 9.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Card Name</StyledTableCell>
            <StyledTableCell align="right">Types</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">Attack</StyledTableCell>
            <StyledTableCell align="right">Defense</StyledTableCell>
            <StyledTableCell align="right">Speed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.types}</StyledTableCell>
              <StyledTableCell align="right">{row.total}</StyledTableCell>
              <StyledTableCell align="right">{row.attack}</StyledTableCell>
              <StyledTableCell align="right">{row.defense}</StyledTableCell>
              <StyledTableCell align="right">{row.speed}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
