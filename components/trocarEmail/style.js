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
    paddingTop: 100,
    display: 'flex',
    alignItems: 'center',
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
  input:{
    width: 250,
    height: 50,
    marginBottom: 30,
    padding: 6,
    borderRadius: 5,
    fontSize: 12,
    letterSpacing: 2,
    color: '#363636',
    fontWeight: 'bold',
    textAlign: 'center', 
    borderColor: "grey",
    borderWidth: 2,
    backgroundColor: '#FFF'
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
