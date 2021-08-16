import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert, SafeAreaView } from 'react-native';
import {listItem} from 'react-native-elements'
import axios from 'axios'

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        listOfData:{}
        url:"http://localhost:5000"
    };

    componentDidMount(){
        this.getPlanets()
    };

    getPlanets = () => {
        const {url} = this.state
        axios
        .get(url)
        .then(response => {
            return this.setState({
                listOfData:response.data.data
            })
        })
        .catch(error => {
            alert.Alert(error.message)
        })
    };

    renderItem = ({item,index}) => (
        <listItem
            key = {Index}
            title = {`Planet : ${item.name}`}
            subtitle = {`distance from earth : ${item.distance.from.earth}`}
            titleStyle = {styles.title}
            containerStyle = {styles.listcontainer}
            bottemDivider
            chevron
            onPress = {()=>this.props.navigation.navigate("Details",{planet_name:item.name})}
        />
    );

    keyExtractor = (item, index) => index.toString();

    render(){
        const {listData} = this.state
        if(listData.length === 0){
            return(
                <View style = {styles.emptyContainer}></View>
            )
        }
        return(
            <View style = {styles.container}>
                <SafeAreaView/>
                <View style = {styles.upperContainer}>
                    <Text style = {styles.headerText}>Planets World</Text>
                </View>
                <View style = {styles.lowerContainer}>
                    <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {this.state.listOfData}
                        renderItem = {this.renderItem}
                    />
                </View>
                <Text>HomeScreen</Text>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#edc988" },
    upperContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" },
    headerText: { fontSize: 30, fontWeight: "bold", color: "#132743" },
    lowerContainer: { flex: 0.9 },
    emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    emptyContainerText: { fontSize: 20 }, title: { fontSize: 18, fontWeight: "bold", color: "#d7385e" }, listContainer: { backgroundColor: "#eeecda" } });