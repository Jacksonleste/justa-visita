import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#363636',
    width: '100vw',
    height: '100vh',
    // flex: 1,
    // justifyContent: 'flex-start',
    padding: 5,
    paddingTop: 0,
    alignItems: 'flex-end',
    position: "fixed",
    top: 50
  },
  body:{
    height: '100%',
    width: '100vw',
    left: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#e7e7e7'
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
  infoName:{
    color: '#000',
    marginTop: 25,
    paddingLeft: 10,
    marginBottom: 5
  },
  info:{
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    alignContent: 'center',
    backgroundColor: "#fff"
  },
  image:{
    padding: 2,
    marginLeft: 8, 
    height: 25, 
    width: 25,
    marginRight: 10, 
    resizeMode: 'stretch',
    borderRadius: 10
  }
});

export default styles;
