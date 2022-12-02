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
    height: '100%',
    width: '100vw',
    borderRadius: '20px 20px 0 0'
  },
  addButton:{
    position: 'absolute',
    flex:0.1,
    // left: 0,
    right: 30,
    bottom: 35,
    flexDirection:'row',
    height:60,
    width: 60,
    alignItems:'center',
  },

  maisIcon:{
    width: 34,
    height: 34
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'left',
    width: '100vw',
    paddingLeft: 20,
    paddingBottom: 5
  }
  
});

export default styles;
