import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,Image,TextInput,ScrollView,ImageBackground,FlatList,TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();


 const Profile=({navigation})=>{
  const [problem,setProblem]= useState([
    {key:1,name:' Physics',chapter:'15 Chapters',image1: require('../assets/group0.png'),image:require('../assets/group4.png')},
    {key:2,name:'Chemistry',chapter:'15 Chapters',image1: require('../assets/group0.png'), image: require('../assets/chem.png')},
    {key:3,name:'   Maths',chapter:'15 Chapters', image1: require('../assets/group0.png'),image: require('../assets/math.png')},
    {key:4,name:'     Hindi',chapter:'15 Chapters',image1: require('../assets/group0.png'),image: require('../assets/eng.png')},
    {key:5,name:' Botany',chapter:'15 Chapters',image1: require('../assets/group0.png'),image: require('../assets/bot1.png')},
    {key:5,name:' Zoology',chapter:'15 Chapters',image1: require('../assets/group0.png'),image: require('../assets/zoo.png')},
    {key:5,name:' English',chapter:'15 Chapters',image1: require('../assets/group0.png'),image: require('../assets/eng.png')},
  ]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingBottom:60}}>
  
        <ImageBackground source={require('../assets/group1.png')} 
        style={{width:"100%",height:"60%",resizeMode:"contain",}}>
        <View style={{marginLeft:25,marginTop:20}}>

       <Image source={require('../assets/w.png')} style={{width:"15%",height:"30%",
       resizeMode:"contain",
       paddingBottom:100,marginBottom:20}}></Image>

      <Text style={{color:"#FFFFFF",fontSize:15,marginTop:20}}>Good Morning</Text>
      <Text  style={{color:"#FFFFFF",fontSize:20}} >Ananthu M Mohan</Text>
      
      </View>
      
      <View style={{flexDirection:'row'}}>
      <FlatList
          numColumns={2}
          data={problem}
          renderItem={({ item }) =>(
          //keyExtractor={(item) => item.id}
            <View style={styles.view3}>
            <ImageBackground source={item.image1} 
            
            style={{width:"100%",height:100,resizeMode:"contain"}}>
            <TouchableOpacity onPress={() =>navigation.navigate('Success')}>
            <Image source={item.image} style={{marginLeft:15,resizeMode:"contain",width:"80%",marginTop:15}}></Image>
           
            
            <Text style={{marginLeft:40,color:"#5E5E5E",fontWeight:'600',alignItems:'center',justifyContent:'center'}}>{item.name}</Text>
            <Text style={{marginLeft:35,color:"#858585"}}>{item.chapter}</Text>
            </TouchableOpacity>
            </ImageBackground>
            </View>
            
          )}
        
        
        />
     </View>
     

</ImageBackground>

<ImageBackground source={require("../assets/group2.png")}
 style={{height:"50%",marginTop:100,resizeMode:"contain"}}></ImageBackground>
      </View>
    
</ScrollView>
  );
}
 //}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#EFF8F9"

  },
  Button:{
      color:"red"
  },
  view3:{
    //marginBottom:20,
    paddingLeft:0,
    paddingTop:0,
    marginLeft:23,
    height: 180,
    width: "40%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    marginBottom:20,
    //flexDirection:'row'
    marginTop:10,
    
}

  
});
