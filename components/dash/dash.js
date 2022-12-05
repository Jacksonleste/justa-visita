import React, { useState } from "react";
import {NavigationContainer ,Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from "./style";
import styleNav from "../../assets/Styles/header"


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Fab from '@mui/material/Fab';
import Info from '../info/info'

// import InfoIcon from '@mui/icons-material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(nome, data, horario, situacao, numReg) {
  return { nome, data, horario, situacao, numReg};
}

const rows = [
  createData('Luiz inácio', '12/12/2022', '16:00', 0, 13131323),
  createData('Bonie', '12/12/2022', '16:00', 1, 154577),
  createData('Cleyde', '12/12/2022', '16:00', 2, 2123156),
  createData('Fulano', '12/12/2022', '16:00', 0, 897546)
];



export default function Dash({navigation}) {
  const [visible, setVisible] = useState(false);
  const [obj, setObj] = useState(null);
  function verInfo(obj){
  setObj(obj)
  setVisible(true)
  console.log('teste')
}

  return (
      <View style={style.container}>
      <View style={styleNav.containerNav}>
        <TouchableOpacity
            style={styleNav.buttonNavBar}
            onPress={()=> {if(visible){
              setVisible(false);
            }else{
              navigation.navigate('Home');
            }}}
            >
              <Image 
              source={require('../../assets/back-arrow.png')}
              style={styleNav.buttonImageIconStyle}
            /> 
          </TouchableOpacity>
      </View>
      <View style={styleNav.containerNav2}>
        <TouchableOpacity
            style={styleNav.buttonNavBar}
            onPress={()=> {if(visible){
              setVisible(false);
            }else{
              navigation.navigate('Profile');
            }}}
            >
              <Image 
              source={require('../../assets/profile.png')}
              style={styleNav.buttonImageIconStyle}
            /> 
          </TouchableOpacity>
      </View>

      <Text style={style.title}>Suas Solicitacões</Text>

        <TableContainer component={Paper} style={style.table}>
        <Table sx={{ minWidth: '100vw'}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="right">Data</StyledTableCell>
              <StyledTableCell align="right">Horario</StyledTableCell>
              <StyledTableCell align="right">Info</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.nome}
                </StyledTableCell>
                <StyledTableCell align="right">{row.data}</StyledTableCell>
                <StyledTableCell align="right">{row.horario}</StyledTableCell>
                <StyledTableCell align="right">
                  <TouchableOpacity onPress={ ()=> verInfo(row)}>
                    <Image 
                      source={require('../../assets/info.png')}
                      style={style.infoImage}
                      />
                  </TouchableOpacity>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TouchableOpacity style={style.addButton} onPress={()=> navigation.navigate('NovaSolicitacao')}>
        <Fab color="primary" aria-label="add">
          <Image style={style.maisIcon} source={require('../../assets/icon-mais.png')} />
        </Fab>
      </TouchableOpacity>
      </TableContainer>

      <Info visible={visible} obj={obj}></Info>
        
    </View>
  );
}