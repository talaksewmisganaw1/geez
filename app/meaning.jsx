import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Meaning = () => {
  const route = useRoute();
  const { title, definition, definition2, image } = route.params || {};
  
  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <Link href={'/'}>
          <View className="h-16 w-full py-2 pl-4 flex-row items-center">
            <View className="h-full flex justify-center"><Ionicons name="arrow-back" size={30}/></View>
            <View className="h-full flex justify-center"><Text className="text-2xl font-semibold ml-7">ትርጉም</Text></View>    
          </View>
      </Link>
      <ScrollView className=' bg-white h-full tt-5 p-5'>
        <Text className="text-lg pb-2 font-semibold">{title}</Text>
        <Text className="text-lg">{definition}</Text>
        {definition2 && <Text className="text-lg mt-2">{definition2}</Text>}
        {image && <Text>{image}</Text>}
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Meaning


