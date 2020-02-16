import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image,StyleSheet } from 'react-native'
import api from '../service/api'

export default class Home extends React.PureComponent {
    
    state = {
        data: []
    }

    async componentDidMount() {
        const response =  await api.get('character')
        this.setState({data:response.data.results})
         
      }

    _renderItem = ({item}) => {
      return  (
          <TouchableOpacity onPress={()=>this._onItemPress(item)} style={styles.touchable}>
              <Image style={styles.image} source={{uri: item.image}}></Image>
              <Text style={{marginLeft: 10}}>{item.name}</Text>
          </TouchableOpacity>
      )
  }



  _onItemPress = (item) => {
      this.props.navigation.navigate('Description', {hero: item})
  } 

  render() {
      return (
          <FlatList 
              data={this.state.data}
              renderItem={this._renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={()=>
                  <View style={{height:1, backgroundColor: '#f7f7f7'}} 
              />}
          />
      )
  }
}

const styles = StyleSheet.create({
    image:{
      height: 50, 
      width: 50, 
      borderRadius: 25
    },
    text:{
      marginLeft: 10
    },
    touchable:{
        flexDirection:'row', 
        padding: 10, 
        alignItems:'center',
        borderBottomWidth: 0.5,
    }
})