import React, { Component } from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import axios from "axios";

export default class AtualizaçoesScreen extends Component {
    

    render() {
        
            return (
                <View style = {styles.infoContainer}>
                <Image source = {require("../assets/lua.jpg")}
                style = {styles.lua}></Image>
                <Text style = {styles.titulo}
                >Por que a Lua azul é rara?</Text>
                <Text>A Lua azul é rara porque não é comum termos a ocorrência de duas Luas cheias em um mesmo mês. Isso somente acontece em intervalos de tempo que podem variar entre dois e três anos, em função do tempo do ciclo lunar.
                </Text>
                <Text>A próxima Lua azul sazonal deve acontecer entre os dias 19 e 20 de agosto de 2024. Já as próximas Luas azuis calendárias estão previstas para as seguintes datas:
                </Text>
                <Text>31 de maio de 2026;</Text>
                <Text>31 de dezembro de 2028;</Text>
                <Text>30 de setembro de 2031;</Text>
                <Text>31 de julho de 2034</Text>
                <Text>Estima-se que, em 2037, e, ainda, em 2048, teremos a aparição de duas Luas azuis em um mesmo ano.</Text>
                </View>
            );
        }
    }

const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    },

    lua: {
        width:350,
        height:300,
        alignSelf:"center"
    },

    titulo: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        marginTop:10
    }
});