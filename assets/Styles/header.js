import {StyleSheet} from 'react-native';

const styleNav = StyleSheet.create({
  containerNav:{
    display: 'flex',
    position: 'relative',
    width:'100vw',
    height: 50,
    backgroundColor: '#0d0025',
    // marginTop: 0
  },
  containerNav2:{
    display: 'flex',
    position: 'fixed',
    alignItems: 'flex-end',
    width:'50vw',
    height: 50,
    backgroundColor: 'transparent',
    paddingRight: 10
    // marginTop: 0
  },
  buttonNav:{
    backgroundColor: 'transparent',
    width: 70,
    height: 50
  },
  buttonImageIconStyle: {
    padding: 10,
    marginLeft: 8, 
    height: 45, 
    width: 45, 
    resizeMode: 'stretch',
    borderRadius: 10
  }
});

export default styleNav;
