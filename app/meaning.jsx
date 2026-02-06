import { StyleSheet, Text, View ,ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Image } from 'react-native';
import dictionary from "./dictionary.json"
import { router } from 'expo-router';

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
    // talew: require('../assets/fonts/AbyssinicaSIL-Regular.ttf'),
    lesan: require('../assets/fonts/Ethiopic Lessan Regular.ttf'),
    talew: require('../assets/fonts/talew.ttf'),
    talew2: require('../assets/fonts/talew3.ttf')
  });

  if (!fontsLoaded) return null;
  

  return (
    <>
      <StatusBar className="bg-gray-100" barStyle="dark-content" translucent={false} />
      <SafeAreaView className="bg-gray-100 h-full" edges={['left', 'right', 'bottom']}>
        <ScrollView className=' bg-white h-full p-5' contentContainerStyle={{ paddingBottom: 60 }}>
          <Text style={{ fontFamily: 'talew2', fontSize: 36}} className="pb-2">{title}</Text>
            {
              dictionary[title]?.map((item, i) => (
                <View key={i} className="mb-5">
                  <Text style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                      Object.entries(item).map(([key, value]) => {
                        if (key === "marker") return <Text style={{ fontFamily: 'talew', fontWeight:'800', fontSize: 15 }} className="mr-4">{value}</Text>
                        if (key === "subtitle") return <Text style={{fontFamily: 'talew2', fontSize: 22}} >{item.subtitle}</Text>
                        if(key === "jump") { return value.map((word) => (
                          <Text
                            key={word}
                            onPress={() => {
                              const trimmed = word.trim().split(/[\s)]+/)[0];
                              router.push({ pathname: '/meaning', params: { title: trimmed } });
                            }}
                            style={{ fontFamily: 'talew2', fontSize: 22 }}
                          >
                            {word}
                          </Text>
                        ))}

                        if (key=== "definition" || key === "definition2" || key === "definition3" || key === "definition4") return <Text style={styles.definition}>{value}</Text>
                        if (key==="example" || key==="example2" || key==="example3" || key==="example4") return <Text style={styles.example}>{value}</Text>
                        if (key==="reference" || key==="reference2" || key==="reference3") return <Text style={styles.definition}>{value}</Text>
                      })
                    }
                  </Text>
                  {Object.entries(item).map(([key, value]) => {
                    if (key === "image") return <Image source={images[value]} style={{height: 200, width: '100%' }} className="block m-auto mt-3 " />
                  })}
                </View>
              ))
            }
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  definition: {
    fontFamily: 'talew',
    fontSize: 20,
    // wordSpacing: -5,
    // letterSpacing: -0.2, // 👈 reduces space width only
    fontWeight: 300,
    color: '#222'
  },
  example: {
    fontFamily: 'lesan',
    fontSize: 22,
    fontWeight: 700,
    wordSpacing: -2, // 👈 reduces space width only
    color: '#222'
  }
});

export default Meaning


