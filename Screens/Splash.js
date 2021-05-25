import * as React from 'react';
import { StyleSheet, Text, View,Button,Image,TextInput,ImageBackground,ScrollView, TouchableOpacity } from 'react-native';

export default class Splash extends React.Component{
  constructor(props){
      super(props);
      setTimeout(()=>{
          this.props.navigation.navigate('Login')
      },3000);
  }
    render(){
        return(
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Image style={{height:"50%",width:"50%"}}
                source={require('../assets/mask.png')}>

                </Image>
            </View>
        )
    }
}