import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    

    render() {
        return (
            <View style = {styles.container}>
              <ImageBackground source = {require("../assets/fundo.jpg")}
              style = {styles.fundo}>
              <TouchableOpacity style = {styles.botao}
              onPress = {()=>{this.props.navigation.navigate("Location")}}>
              <Image source = {require("../assets/pin.png")}
              style = {styles.pin}
              ></Image>
              <Text>Localização</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.botao1}
              onPress = {()=>{this.props.navigation.navigate("Meteors")}}>
               <Image source = {require("../assets/astronauta.png")}
               style = {styles.astronauta}>
               </Image>
               <Text>Meteoros</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.botao2}
              onPress = {()=>{this.props.navigation.navigate("Atualizaçoes")}}>
                <Image source = {require("../assets/estrela.png")}
                style = {styles.estrela}
                ></Image>
                <Text>Atualizações</Text>
              </TouchableOpacity>
                </ImageBackground> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    fundo: {
        width:"100%",
        height:"100%"
    },
    pin: {
        width:55,
        height:80
    },
    astronauta: {
        width:70,
        height:100
    },
    estrela:{
        width:80,
        height:110,
    },
    botao: {
        backgroundColor: "white",
        width:130,
        alignSelf:"center",
        marginTop:190,
        alignItems:"center",
        borderRadius:8,
        borderWidth:5,
        borderColor:"purple"
    },
    botao1: {
        backgroundColor:"white",
        width:130,
        marginTop:30,
        alignSelf:"center",
        alignItems:"center",
        borderRadius:8,
        borderWidth:5,
        borderColor:"purple"

    },
    botao2:{
       backgroundColor:"white",
       width:130,
       marginTop:30,
       alignSelf:"center",
        alignItems:"center",
        borderRadius:8,
        borderWidth:5,
        borderColor:"purple"
    }

})