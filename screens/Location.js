import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class LocationScreen extends Component {
 constructor()  {
  super()
  this.state = {location:{}}
}
  pegaInfo = () => {
  axios.get("https://api.wheretheiss.at/v1/satellites/25544").then(infoResposta => {this.setState({location:infoResposta.data})})
  }
  componentDidMount(){this.pegaInfo()
  }


    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Carregando</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                 <MapView region = {{latitude:this.state.location.latitude, longitude:this.state.location.longitude}}   style = {{width:"100%", height:"100%"}}></MapView>   
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    },
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
})
