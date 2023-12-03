import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScreenType } from '../constants/constants'
const HomeScreen = ({ onExit }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onExit(ScreenType.addNote)}>
        <View style={styles.itemButton}>
          <Text style={styles.text}>Add new note</Text>
          <Icon name="arrow-forward-outline" style={styles.icon}/>
        </View>
      </Pressable>

      <Pressable onPress={() => onExit(ScreenType.allNotes)}>
        <View style={styles.itemButton}>
          <Text style={styles.text}>View all notes</Text>
          <Icon name="arrow-forward-outline" style={styles.icon}/>  
        </View>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.3,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.25,
  },
  itemButton: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    elevation: 2,
  },
  text: { 
    fontSize: 20,
    alignSelf: "center",
    color: "black",
  },
  icon: {
    alignSelf: "center",
    fontSize: 30,
    color: "black",
  }
})