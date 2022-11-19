import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#808080',
    width: '100vw',
    height: '100vh',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
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
    fontSize: 30,
    fontWeight: "bold"
  },
  label:{
    marginBottom: 3,
    textAlign: 'start',
    width: "87%",
  },
  input:{
    width: "90%",
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  button:{
    backgroundColor: "#003FD1",
    justifyContent: "center",
    alignItems: 'center',
    width: "90%",
    padding: 10,
    marginLeft: 12,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000"
  },
  textButton:{
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
