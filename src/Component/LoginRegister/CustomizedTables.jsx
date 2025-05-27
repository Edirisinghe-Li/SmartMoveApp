import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: 'white',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(bus, road, time) {
  return { bus, road, time };
}

const rows = [
  createData('SLTB Colombo Express', 'Colombo - Galle', '06:30 AM'),
  createData('Intercity Jaffna Bus', 'Colombo → Jaffna', '06:00 PM'),
  createData('SLTB Trinco Express', 'Trincomalee → Colombo', '06:10 AM'),
  createData('Private Matara Link', 'Matara → Colombo', '07:00 AM'),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        overflowX: 'auto',
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Table sx={{ minWidth: 360 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bus</StyledTableCell>
            <StyledTableCell align="right">Route</StyledTableCell>
            <StyledTableCell align="right">Arrival Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.bus}>
              <StyledTableCell component="th" scope="row">
                {row.bus}
              </StyledTableCell>
              <StyledTableCell align="right">{row.road}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
