import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#363636',
    width: '99vw',
    height: '100vh',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 5,
    paddingTop: 0,
    alignItems: 'center',
  },
  title:{
    color: 'white',
    fontSize: 30,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  body:{
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    width: '100vw',
    backgroundColor: '#696969',
    padding: 10,
    paddingTop: 30
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
  },
});

export default styles;
