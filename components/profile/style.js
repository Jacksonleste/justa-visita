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
  imageContainer:{
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  profileImage:{
    padding: 10,
    marginLeft: 8, 
    height: 150, 
    width: 150, 
    resizeMode: 'stretch',
    borderRadius: 10
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
  }
});

export default styles;
