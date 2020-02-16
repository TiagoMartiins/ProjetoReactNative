import React from 'react'
import { ScrollView, Text,View,Image,StyleSheet } from 'react-native'



export default function Description({ route, navigation }) {
    const { hero } = route.params;
    return (
      
      <View style={styles.view}>
        <Image style={styles.image} source={{uri:hero.image}}></Image>
         <ScrollView>
                <Text style={styles.title}>{hero.name}</Text>
                <View style={styles.secondView}>
                <Text style={styles.text}>Type:{hero.type}</Text>
                <Text style={styles.text}>Status:{hero.status}</Text>
                <Text style={styles.text}>Gender:{hero.gender}</Text>
                <Text style={styles.text}>Specie:{hero.species}</Text>
                <Text style={styles.text}>Origin Name:{hero.origin.name}</Text>
                </View>
           </ScrollView> 
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    secondView: {
      justifyContent:'flex-start',
      elevation:10,
      opacity:90
    },
    title:{
      padding:10, 
      fontSize:25,
      textAlign:'center',
      alignContent:'center',
      fontWeight:'bold'
    },
    text:{
      padding:10,
      textAlign:'left',
      fontWeight:'bold',
      borderBottomWidth: 0.5,
      borderStyle:'dotted',
      borderWidth:2
    },
    image:{
      height: 150, 
      width: 200, 
      borderRadius: 25,
      margin: 5,
      justifyContent:'center',
      alignContent:'center'
    },
    view:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    }
  })
