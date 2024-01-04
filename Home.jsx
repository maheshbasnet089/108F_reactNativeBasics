import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Buttons from "./Buttons";


export default function Home({navigation}) {
 
  const [count,setCount] = useState(0)
  const [email,setEmail] = useState("")
  const handleRegister = ()=>{
    Alert.alert("Do you wanna register?","K tapai register garney ho blah blah ",[
        {
            text : "Cancel", onPress : ()=>console.log("Cancelled")
        },
        {
            text : "Proceed", onPress : ()=>console.log("Proceed for register")
        }
    ])
  }
  return (
     <View>
      <Text style={styles.text}>{count}</Text>
     <View style={{marginBottom : 10}}>
     <Button title="Increase" color='green' onPress={()=>setCount(count + 1)}/>
     </View>
      <Button title="Decrease" onPress={()=>setCount(count-1)}/>

    <TextInput onChangeText={(text)=>setEmail(text)} style={{padding:20}} placeholder="Enter your email" />

    <Text>{email}</Text>

      <TouchableOpacity style={styles.touchable}>
      <Text style={{fontSize : 24}} onPress={handleRegister}>Register</Text>
      </TouchableOpacity>
      <Buttons title="Register"/>
      <Buttons title="Login"/>
      <Buttons title="LogOut" />
      <Button title="Go to About" onPress={()=>navigation.navigate("About",{name : "manish basnet", age : 21})}/>
      <Button title="Go to Blogs" onPress={()=>navigation.navigate("Blogs")}/>
     </View>
  );
}

const styles = StyleSheet.create({
  text : {
    fontSize : 30
  },
  touchable : {
    backgroundColor : 'green',
    width : 100,
    marginTop : 10
  }
})