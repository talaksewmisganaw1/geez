import { useState, useEffect } from 'react';
import { TouchableOpacity, Text, TextInput, ScrollView, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import dictionary from "./dictionary.json";
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import SplashScreen from "./SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    talew: require('../assets/fonts/talew.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // if (!fontsLoaded) return null;
  if (showSplash) return <SplashScreen />;

  const filteredWords = query
    ? Object.keys(dictionary).filter(word =>
        word.toLowerCase().startsWith(query.toLowerCase())
      )
    : Object.keys(dictionary);

  return (
    <>
      <StatusBar backgroundColor="#f3f4f6" barStyle="dark-content" />
      <SafeAreaView className="flex-1 px-4 bg-gray-100">
        <View className="mb-5">
          <Text style={{fontFamily: 'talew', fontSize:22 }} className=" text-center mt-1">
            የአለቃ ኪዳነወልድ ክፍሌ
          </Text>
          <Text style={{fontFamily: 'talew', fontSize:22 }} className="text-center">
            የግእዝ-አማርኛ መዝገበ-ቃላት
          </Text>
        </View>

        <TextInput
          style={{ fontSize: 18.5, fontFamily: 'talew' }}
          className="border px-4 py-[.4rem] mb-5 bg-white rounded-lg"
          placeholder="ፊደል ወይም ቃል ያስገቡ..."
          placeholderTextColor="#6b7280"
          value={query}
          onChangeText={setQuery}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <ScrollView>
          {filteredWords.map(word => (
            <TouchableOpacity
              key={word}
              onPress={() => {
                router.push({ pathname: '/meaning', params: { title: word} })
              }}
              className="mb-3 px-3 py-2 bg-white rounded shadow"
            >
              <Text className="text-gray-700" style={{fontFamily: 'talew', fontWeight: 600, fontSize: 19}}>{word}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
