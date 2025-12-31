import { useState, useEffect } from 'react';
import { TouchableOpacity, Text, TextInput, ScrollView, View, StatusBar } from 'react-native';
import "../global.css";
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
    NotoAmharic: require('../assets/fonts/Menbere-VariableFont_wght.ttf'),
    semiBold: require('../assets/fonts/Menbere-SemiBold.ttf')
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) return null;
  if (showSplash) return <SplashScreen />;

  const filteredWords = query
    ? Object.keys(dictionary).filter(word =>
        word.toLowerCase().startsWith(query.toLowerCase())
      )
    : Object.keys(dictionary);

  return (
    <>
      <StatusBar backgroundColor="#f3f4f6" barStyle="dark-content" />
      <SafeAreaView className="flex-1 p-4 bg-gray-100">
        <View className="mb-5">
          <Text style={{ fontFamily: 'semiBold' }} className="text-xl text-center">
            የአለቃ ኪዳነወልድ ክፍሌ
          </Text>
          <Text style={{ fontFamily: 'semiBold' }} className="text-xl text-center">
            የግእዝ አማርኛ መዝገበ-ቃላት
          </Text>
        </View>

        <TextInput
          style={{ fontFamily: 'NotoAmharic', fontSize: 14 }}
          className="border px-3 py-2 mb-5 bg-white rounded-lg"
          placeholder="ፊደል ወይም ቃል ያስገቡ..."
          value={query}
          onChangeText={setQuery}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <ScrollView>
          {filteredWords.map(word => (
            <TouchableOpacity
              key={word}
              onPress={() => router.push({ pathname: '/meaning', params: { title: word } })}
              className="mb-3 p-3 bg-white rounded shadow"
            >
              <Text style={{ fontFamily: 'NotoAmharic' }}>{word}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
