
import { useState } from 'react';
import { TouchableOpacity, Text, TextInput, ScrollView, View, StatusBar} from 'react-native';
import "../global.css"
import { SafeAreaView } from 'react-native-safe-area-context'
import dictionary from "./dictionary.json"
import { router, Link } from 'expo-router'
import Meaning from './meaning';
import { useFonts } from 'expo-font';


export default function App() {
  const [query, setQuery] = useState('');
  
  const [fontsLoaded] = useFonts({
    NotoAmharic: require('../assets/fonts/Menbere-VariableFont_wght.ttf'),
    semiBold: require('../assets/fonts/Menbere-SemiBold.ttf')
  });

  if (!fontsLoaded) return null;

  // Get filtered words based on input, or all sorted alphabetically if input is empty
  const filteredWords = query
    ? Object.keys(dictionary).filter((word) =>
        word.toLowerCase().startsWith(query.toLowerCase())
      )
    : Object.keys(dictionary);
;

  return (
    <>
      <SafeAreaView className="flex-1 p-5 bg-gray-100">
        <Text className="text-2xl font-bold mb-5 text-center">Dictionary</Text>

        <TextInput
          className="border border-gray-400 rounded px-3 py-2 w-full mb-5 bg-white text-xl"
          placeholder="ፊደል ወይም ቃል ያስገቡ..."
          value={query}
          onChangeText={setQuery}
        />

        <ScrollView>
          {filteredWords.length > 0 ? (
            filteredWords.map((word) => (
              <TouchableOpacity onPress={() => router.push({pathname: '/meaning', params: {title: word, definition: dictionary[word].ትርጉም, definition2:dictionary[word].ትርጉም2, image: dictionary[word].ምስል}})} key={word} className="mb-4 p-3 bg-white rounded shadow">
                <Text style={{ fontFamily: 'NotoAmharic'}} className="text-base font-semibold">{word}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text className="text-center text-gray-500">የተገኘ ቃል የለም</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
