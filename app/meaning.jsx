import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Image } from 'react-native';
import dictionary from "./dictionary.json"

const Meaning = () => {
  const route = useRoute();
  const { title } = route.params || {};
  
  const images = {
    hayel: require('../assets/hayel.png'),
    hepopa: require('../assets/hepopa.png'),
    herodyanos: require('../assets/herodyanos.png'),
    hobay: require('../assets/hobay.png'),
    hosaena: require('../assets/hosa\'ena.png'),
  }

  const [fontsLoaded] = useFonts({
    defaultFont: require('../assets/fonts/Menbere-VariableFont_wght.ttf'),
    boldFont: require('../assets/fonts/Menbere-Bold.ttf'),
    semiBold: require('../assets/fonts/Menbere-SemiBold.ttf')
  });

  if (!fontsLoaded) return null;
  

  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <Link href={'/'}>
          <View className="h-16 w-full py-2 pl-4 flex-row items-center">
            <View className="h-full flex justify-center"><Ionicons name="arrow-back" size={30}/></View>
            <View className="h-full flex justify-center"><Text className="text-2xl font-semibold ml-7">ትርጉም</Text></View>    
          </View>
      </Link>
      <ScrollView className=' bg-white h-full p-5'>
        <Text style={{ fontFamily: 'boldFont', fontWeight:'600', fontSize: 25 }} className="pb-2">{title}</Text>
          {
            dictionary[title]?.map((item, i) => (
              <Text key={i} className="mb-7">
                {item.marker && <Text style={{ fontFamily: 'boldFont', fontWeight:'600', fontSize: 12 }} className="mr-4">{item.marker}</Text>}
                {item.subtitle && <Text style={{ fontFamily: 'boldFont', fontWeight:'600', fontSize: 12 }}>{item.subtitle}</Text>}
                {item.definition && <Text style={{ fontFamily: 'defaultFont', fontWeight:'300', fontSize: 12 }}>{item.definition}</Text>}
                {item.image && <Image source={images[item.image]} style={{height: 200, width: '100%' }} className="block m-auto mt-3 " />}
              </Text>
            ))
          }
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Meaning


