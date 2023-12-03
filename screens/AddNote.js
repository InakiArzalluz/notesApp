import { StyleSheet, Text, TextInput, View, Button, Dimensions } from 'react-native'
import {React, useState} from 'react'
import { ScreenType } from '../constants/constants';

const AddNote = ({onExit, onSave}) => {
  const [enteredText, setenteredText] = useState("")

  // handleChange es quien efectua el guardado del cambio en la nota
  const handleChange = (val) =>{
    setenteredText(val);
  };

  // almacena la nota
  const handleClick = () =>{
    if(enteredText.trim().length > 0){
      // Guardo la nota
      onSave(enteredText);
      // Me voy a la pantalla de todas la notas
      onExit(ScreenType.allNotes);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Add Note</Text>
        <View>
          {/* handleChange va a recibir el nuevo texto al momento de "onChangeText" */}
          <TextInput onChangeText={handleChange} style={styles.input} />
        </View>
        <Button onPress={handleClick} title="Add" />
      </View>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignSelf:'center',
    fontWeight: "bold",
  },
  formContainer:{
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical:10,
    marginHorizontal:10,
  },
  input:{
    height: Dimensions.get("window").height * 0.06,
    //backgroundColor: "#e0e0e0",
    marginVertical: 10,
    borderBottomWidth: 2
  }
})