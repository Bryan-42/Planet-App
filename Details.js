import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            details:{
                imagePath:"",
                url: `http://localhost:5000/planet?name=${this.props.navigation.getParam( "planet_name" )}`
            }
        }
    }

    getDetails = () => {
        const {url} = this.state
        axios
        .get(url)
        .then(response => {
            this.setDetails(response.data.data)
        })
    }

    setDetails = planetDetails => {
        const planetType = planetDetails.planet_type
        let imagePath = ""
        switch(planetType){
            case "Gas Giant":
                imagePath = require("../assets/planet_type/gas_giant.png")
            break
            case "Terrestrial":
                imagePath = require("../assets/planet_type/terrestrial.png")
            break
            case "Super Earth":
                imagePath = require("../assets/planet_type/super_earth.png")
            break
            case "Neptune Like":
                imagePath = require("../assets/planet_type/neptune_like.png")
            break
            default:
                imagePath = require("../assets/planet_type/gas_giant.png")
        }
        this.setState({
            details:planetDetails,
            imagePath:imagePath
        })
    }



    componentDidMount(){
        this.getDetails()
    }

    render(){
        return(
            <View>
                <Text>DetailScreen</Text>
            </View>
        )
    }
}