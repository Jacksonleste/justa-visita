import * as React from 'react';
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";


// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// import Fab from '@mui/material/Fab';

// // import InfoIcon from '@mui/icons-material';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 16,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(nome, data, horario, info) {
//   return { nome, data, horario, info };
// }

// const rows = [
//   createData('Fulano 1', '12/12/2022', '16:00', 0),
//   createData('Fulano 1', '12/12/2022', '16:00', 0),
//   createData('Fulano 1', '12/12/2022', '16:00', 0),
//   createData('Fulano 1', '12/12/2022', '16:00', 0)
// ];

export default function Dash({navigation}) {
  return (
    <View>
    </View>
      // <View style={style.container}>
      // <View style={style.containerNav}>
      //   <TouchableOpacity
      //       style={style.buttonNavBar}
      //       onPress={()=> navigation.navigate('Home')}
      //       >
      //         <Image 
      //         source={require('../../assets/back-arrow.png')}
      //         style={style.buttonImageIconStyle}
      //       /> 
      //     </TouchableOpacity>
      // </View>

      // <Text style={style.title}>Solicitacoes</Text>

      //   <TableContainer component={Paper} style={style.table}>
      //   <Table sx={{ minWidth: '100vw'}} aria-label="customized table">
      //     <TableHead>
      //       <TableRow>
      //         <StyledTableCell>Nome</StyledTableCell>
      //         <StyledTableCell align="right">Data</StyledTableCell>
      //         <StyledTableCell align="right">Horario</StyledTableCell>
      //         <StyledTableCell align="right">Info</StyledTableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //       {rows.map((row) => (
      //         <StyledTableRow key={row.name}>
      //           <StyledTableCell component="th" scope="row">
      //             {row.nome}
      //           </StyledTableCell>
      //           <StyledTableCell align="right">{row.data}</StyledTableCell>
      //           <StyledTableCell align="right">{row.horario}</StyledTableCell>
      //           <StyledTableCell align="right">{row.info}</StyledTableCell>
      //         </StyledTableRow>
      //       ))}
      //     </TableBody>
      //   </Table>
      //   <Fab onPress={()=> navigation.navigate('Cadastro')} style={style.addButton} color="primary" aria-label="add">
      //     <Image style={style.maisIcon} source={require('../../assets/icon-mais.png')} />
      //   </Fab>
      // </TableContainer>
        
      // </View>
  );
}
