import * as React from 'react';
import { StyleSheet, Text, View,Button,Image,TextInput,ImageBackground,ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';

export default function Login({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
   
       <ImageBackground source={require('../assets/mask.png')} style={styles.Image}>
       <Image source={require('../assets/group.png')} style={{margin:100,marginTop:60}}></Image>
      

        <Image source={require('../assets/w.png')} style={{width:"30%",height:"22%",
        resizeMode:"contain",marginLeft:150,marginBottom:50}}></Image>
        </ImageBackground>
        <Text style={{fontSize:25,fontWeight:'700',marginTop:10,color:"#474747"}}>WELCOME BACK</Text>

        <Text style={{color:"#858585"}}>Login to Your Account</Text>

       <TextInput style={styles.TextInput}
        keyboardType="number-pad" placeholder="Mobile Number"></TextInput>

      <TouchableOpacity style={{width:"80%"}}
      onPress={() => navigation.navigate("Profile")} >
     <Button title="Login" onPress={() => navigation.navigate("Profile")} style={{color:'#02D384',width:"180%",padding:200}}></Button>
      </TouchableOpacity>
      <View style={{flexDirection:'row',marginTop:30}}>
      
      <Text style={{color:"#858585"}} >Don't have an account ?  </Text>
      <Text style={{color:"#00B7C9"}} onPress={() => navigation.navigate("Profile")}>Sign up</Text>
    

      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:50
   
  },
  TextInput:{
    borderWidth:1,
    borderRadius:5,
    width:"80%",
    height:"8%",
    borderColor:"#D4D4D4",
    padding:20,
    marginTop:30,
    marginBottom:20
  },

  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
   // width:"150%",
    borderColor:"#00000029"
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    marginLeft:110,
    marginRight:110
  },
  Image:{
    width:"100%",
    height:"70%"
  },
});
