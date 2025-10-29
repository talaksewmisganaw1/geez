import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';

const Meaning = ({ title, definition }) => {
  const route = useRoute();
  const { title, definition } = route.params || {};
  
  return (
    <SafeAreaView>
      <Text>{title}</Text>
      <Text>{definition}</Text>
      <Text>ghjkl</Text>
      <Link href={'/'} className='p-9 bg-slate-500'>home</Link>
    </SafeAreaView>
  )
}

export default Meaning


