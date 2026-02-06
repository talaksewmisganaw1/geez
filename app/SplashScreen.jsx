import { View, Text, Image, StatusBar } from "react-native";
import { useFonts } from "expo-font";

export default function SplashScreen() {
  const [fontsLoaded] = useFonts({
    NotoAmharic: require("../assets/fonts/Menbere-VariableFont_wght.ttf"),
    semiBold: require("../assets/fonts/Menbere-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor="#f3f4f6" barStyle="dark-content" />
      <View className="flex-1 bg-gray-100 items-center justify-center px-6">
        
        {/* Logo */}
        <Image
          source={require("../assets/splash.png")}
          resizeMode="contain"
          className="w-[90%] h-[49.7%] rounded-3xl mb-10 shadow-lg"
          style={{
            backgroundColor: "#fff", // keeps shadow visible
          }}
        />


        {/* Title */}
        <Text
          className="text-xl text-gray-800 text-center leading-8 mb-6"
          style={{ fontFamily: "semiBold" }}
        >
          {`መጽሐፈ ፡ ሰዋስው ፡ ወግስ ፡
  ወመዝገበ ፡ ቃላት ፡ ሐዲስ ።`}
        </Text>

        {/* Author */}
        <Text
          className="text-base text-gray-600 text-center underline"
          style={{ fontFamily: "semiBold" }}
        >
          አለቃ ፡ ኪዳነ ፡ ወልድ ፡ ክፍሌ
        </Text>
      </View>
    </>
  );
}
