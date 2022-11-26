import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#363636',
    width: '100vw',
    height: '100vh',
    // flex: 1,
    justifyContent: 'flex-start',
    padding: 5,
    paddingTop: 0,
    alignItems: 'flex-end',
  },
  containerNav:{
    width:'100vw',
    height: 50,
    backgroundColor: 'black',
    marginTop: 0
  },
  buttonNav:{
    backgroundColor: 'transparent',
    width: 70,
    height: 50
  },
  textButtonNav:{
    color: 'white',
    fontSize: 20
  },
  buttonImageIconStyle: {
    padding: 10,
    marginLeft: 8, 
    height: 45, 
    width: 45, 
    resizeMode: 'stretch', 
  },
  table:{
    height: '100%'
  }
  
});

export default styles;
