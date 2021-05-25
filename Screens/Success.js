import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground ,Button,TouchableOpacity} from 'react-native';


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default function Success({navigation}) {
  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/tick.png')} style={{marginTop:50}}></Image>

      
       
       <Text style={{color:"#474747",fontSize:25,marginTop:0}}>Success!</Text>

      <Text style={{color:"#858585",marginBottom:180}}>Your account has been Created</Text>

      <TouchableOpacity style={{width:"80%"}} onPress={() => navigation.navigate("Login")}>
      <Button title="Login" onPress={() => navigation.toggleDrawer()} style={{color:'#02D384',width:"180%",padding:200}}></Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:"black"
  },

  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width:"80%",
    borderColor:"#00000029"
    
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
