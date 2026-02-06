import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import "../global.css";

const RootLayout = () => {
    const [fontsLoaded] = useFonts({
      talew2: require('../assets/fonts/talew3.ttf')
    });
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}} />
        <Stack.Screen name='meaning' options={{title: 'ትርጉም', headerStyle: {backgroundColor: "#f3f4f6"}, headerTitleStyle: { fontSize: 24, fontFamily: 'talew2' }, }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})