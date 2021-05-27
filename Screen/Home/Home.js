
import React, {Component} from 'react';
import Car from './Components/Car';
import { View, Text, Image } from 'react-native';

let array = [1, 2, 3];

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      cars: []
    }
  }

  componentDidMount(){
    fetch('https://carapi.azurewebsites.net/Voiture', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },     
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        cars: data
      }, () => console.log(this.state.cars))
    })
    .catch(err => console.log(err))
  }
  
  render(){
    return(
      <View>
      {
        this.state.cars.map((value , key) => {
          return (
            <Car data={value} key={key}/>
          );
        })
      }
    </View>
    )
  }
}

export default Home;{}

