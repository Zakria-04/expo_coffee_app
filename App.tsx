import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nav from "./src/routes/Nav"

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Nav />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})