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
    position: "fixed",
    top: 50
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
  },
  infoImage:{
    width: 20,
    height: 20
  }
  
});

export default styles;
