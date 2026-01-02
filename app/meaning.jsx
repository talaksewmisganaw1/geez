import { Text, View ,ScrollView, StatusBar } from 'react-native';
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
    <>
      <StatusBar className="bg-gray-100" barStyle="dark-content" translucent={false} />
      <SafeAreaView className="bg-gray-100 h-full" edges={['left', 'right', 'bottom']}>
        <ScrollView className=' bg-white h-full p-5' contentContainerStyle={{ paddingBottom: 60 }}>
          <Text style={{ fontFamily: 'boldFont', fontWeight:'600', fontSize: 25 }} className="pb-2">{title}</Text>
            {
              dictionary[title]?.map((item, i) => (
                <View key={i} className="mb-5">
                  <Text>
                    {item.marker && <Text style={{ fontFamily: 'boldFont', fontWeight:'600', fontSize: 15 }} className="mr-4">{item.marker}</Text>}
                    {item.subtitle && <Text style={{ fontFamily: 'boldFont', fontWeight:'600', fontSize: 15 }}>{item.subtitle}</Text>}
                    {item.definition && <Text style={{ fontFamily: 'defaultFont', fontWeight:'300', fontSize: 15 }}>{item.definition}</Text>}
                  </Text>
                  {item.image && <Image source={images[item.image]} style={{height: 200, width: '100%' }} className="block m-auto mt-3 " />}
                </View>
              ))
            }
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Meaning


