import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

const AllNotesScreen = ({notes}) => {
  const renderItemFunc = (itemData) => {
    return <ListItem note={itemData.item.note}/>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Notes</Text>
      <FlatList data={notes} renderItem={renderItemFunc} />
    </View>
  )
}

export default AllNotesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title:{
    width: Dimensions.get("window").width * 0.7, 
    fontSize: 30,
    fontWeight: "700",
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    padding: 15,
    textAlign: 'center',
  },
})