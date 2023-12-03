import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js'
import HomeScreen from './screens/HomeScreen.js';
import AddNote from './screens/AddNote.js';
import AllNotesScreen from './screens/AllNotesScreen.js';
import { useState } from 'react';
import { ScreenType } from './constants/constants.js';
import BackButton from './components/BackButton.js';
export default function App() {
  // El state es el que cambia entre screens (creo) -> confirmar: algo asi, es quien contiene el estado de la web.
  const [screen, setscreen] = useState(ScreenType.home);
  const [notes, setnotes] = useState ([]);
  const updateScreen = (data) =>{
    setscreen(data)
  }
  let content;

  // Aca cambio de pantalla, ya que al cambiarse "screen", cambio la 
  // variable "content" que contiene lo que se muestra en pantalla
  if(screen === ScreenType.addNote)
  {
    // onSave agrega la nueva nota a las ya almacenadas
    content = (
      <AddNote
        onExit={updateScreen}
        onSave={(nota) => setnotes([ ...notes, {id:Date.now(), note:nota} ])}
      />
    );
  } 
  else if(screen === ScreenType.allNotes)
  {
    content = (
      <AllNotesScreen
        notes={notes}
      />
    );
  } else if(screen === ScreenType.home)
  {
    // "data" lo define HomeScreen.js al pasarlo como parametro en:
    //        <Pressable onPress={   () => onExit(ScreenType.addNote)   }>
    content = (
      <HomeScreen
      // updateScreen es: (data) => { setscreen(data)}
        onExit={updateScreen}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      {/* Solo muestro el boton de back si no estoy en la pantalla principal*/}
      { screen !== ScreenType.home && (
        <BackButton onButtonClick={updateScreen} />
      )}
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
