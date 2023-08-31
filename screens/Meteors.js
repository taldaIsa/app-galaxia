import React, { Component } from 'react';
import { Text, View, Alert, FlatList, ImageBackground, StyleSheet } from 'react-native';
import axios from "axios";


export default class MeteorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meteors: {},
        };
    }

    componentDidMount() {
        this.getMeteors()
    }

    getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=1PSLVD4rjUsjOeMI2fJDPSLBrZiX9hsPBPX5Xg54")
            .then(response => {
                this.setState({ meteors: response.data.near_earth_objects })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.meteors).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
            let meteor_arr = Object.keys(this.state.meteors).map(meteor_date => {
                return this.state.meteors[meteor_date]
            })
            let meteors = [].concat.apply([], meteor_arr);

            meteors.forEach(function (element) {
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
                let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000
                element.threat_score = threatScore;
            });
            
            meteors.sort(function(a,b){
            return b.threat_score - a.threat_score
            })
            meteors = meteors.slice(0,10);

            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <FlatList data = {meteors} renderItem = {this.renderItem} keyExtractor = {(item,index) => index.toString ()}
                    horizontal = {true}></FlatList>
                </View>
            )
        }
    }
    renderItem = ({item}) => {
    var meteoro = item
    return (
    <View style = {{flex: 1}}>
    <ImageBackground
    style = {{width: "110%", height:"110%"}}
    source = {require("../assets/stars.gif")}>
    <Text
    style = {style.nome}>Nome:{meteoro.name}    </Text>
    <Text 
    style = {style.brilho}>Brilho:{meteoro.absolute_magnitude_h}</Text>
    <Text style = {style.brilho}>Tamanho:{meteoro.estimated_diameter.kilometers.estimated_diameter_max}km</Text>{//caminho para pegar o tamanho
    }
    <Text style = {style.brilho}>Data:{meteoro.close_approach_data[0].close_approach_date_full}</Text>
    <Text style = {style.brilho}>Velocidade:{meteoro.close_approach_data[0].relative_velocity.kilometers_per_second}km/s</Text>
    <Text style = {style.brilho}>Distância da terra:{meteoro.close_approach_data[0].miss_distance.kilometers}km</Text>
    </ImageBackground>
    </View>
    )
    }
}
const style = StyleSheet.create({
nome:{fontSize:25,
marginTop:100,
color:"white",
marginLeft:30},

brilho:{fontSize:18,
color:"white",
marginLeft:30,
}


})

