
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
  const [focused, setFocused] = useState(false);
  
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
      <StatusBar className="bg-gray-100" barStyle="dark-content" translucent={false} />
      <SafeAreaView className="flex-1 p-4 pt-0 pb-0 bg-gray-100">
        <View className="text-2xl font-bold mb-5 text-center">
          <Text style={{ fontFamily: 'semiBold'}} className="text-xl text-center">የአለቃ ኪዳነወልድ ክፍሌ</Text>
          <Text style={{ fontFamily: 'semiBold'}} className="text-xl text-center">የግእዝ አማርኛ መዝገበ-ቃላት</Text>
        </View>

        <TextInput
          style={{ fontFamily: 'NotoAmharic', fontSize: 14}}
          className={`border border-gray-400 px-3 py-2 w-full mb-5 bg-white text-xl rounded-lg ${focused ? 'border-gray-400' : 'border-gray-300'}`}
          placeholder="ፊደል ወይም ቃል ያስገቡ..."
          value={query}
          onChangeText={setQuery}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        

        <ScrollView>
          {filteredWords.length > 0 ? (
            filteredWords.map((word) => (
              <TouchableOpacity onPress={() => router.push({pathname: '/meaning', params: {title: word}})} key={word} className="mb-3 p-3 bg-white rounded shadow">
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
