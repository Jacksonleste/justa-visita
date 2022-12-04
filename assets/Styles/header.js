import {StyleSheet} from 'react-native';

const styleNav = StyleSheet.create({
  containerNav:{
    position: 'relative',
    width:'100vw',
    height: 50,
    backgroundColor: '#0d0025',
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
