import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';


class Car extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
    }
    
    

    render() {
        return (
            <View>
                <Card>
                    <Card.Title>{this.props.data.nom}</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: this.props.data.image}}></Card.Image>
                    <Text style={{ marginBottom: 10 }}>
                        {'\n'}
                        - Puissance (cH) : {this.props.data.puissance} {'\n'}
                        - Année : {this.props.data.annee}
                </Text>
                    <Button buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }} title={`${this.props.data.prix} €`} />


                </Card>
            </View>
        )
    }
}

export default Car
