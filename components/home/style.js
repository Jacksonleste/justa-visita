import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    width: '100vw',
    height: '100vh',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000f5',
    padding: 5,
    alignItems: 'center',
  },
  homeButtons:{
    color: "#white",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: 'center',
    width: "90%",
    padding: 10,
    marginLeft: 12,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF"
  },
  textButton:{
    color: "#FFF",
    fontSize: 20,
  },
  titleContainer:{
    backgroundColor: '#000000f5',
    paddingTop:80,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  title:{
    color: '#FFF',
    fontSize: 30,
  }, 
  title1:{
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default styles;
