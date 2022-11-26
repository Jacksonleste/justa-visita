import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#363636',
    width: '100vw',
    height: '100vh',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    paddingTop: 0,
    alignItems: 'center',
  },
  titleContainer:{
    backgroundColor: '#transparent',
    paddingTop:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: '#FFF',
    fontSize: 35,
    fontWeight: "bold",
    fontFamily:'Helvetica',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
  label:{
    marginBottom: 3,
    textAlign: 'start',
    width: "87%",
  },
  input:{
    width: 250,
    height: 50,
    marginBottom: 10,
    marginTop: 20,
    padding: 6,
    borderRadius: 5,
    fontSize: 12,
    letterSpacing: 2,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    borderBottomColor: "grey",
    borderBottomWidth: 2
  },
  button:{
    backgroundColor: "#191950",
    justifyContent: "center",
    alignItems: 'center',
    width: "90%",
    padding: 10,
    marginLeft: 12,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#363636"
  },
  textButton:{
    color: "#FFF",
    fontSize: 20,
  },
  containerNav:{
    position: 'relative',
    width:'100vw',
    height: 50,
    backgroundColor: 'black',
    // marginTop: 0
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
  }
});

export default styles;
