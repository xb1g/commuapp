import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import {
  useFonts,
  Raleway_400Regular,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import { HelloWorld } from "../components/Hello";
// import { AnimationWithTouchHandler } from "../components/Animate";

export default function Page() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>
            This is the first page of your app.
          </Text>
          <HelloWorld />
          <HelloWorld />
          <HelloWorld />
          <HelloWorld />
          <HelloWorld />
          {/* <AnimationWithTouchHandler /> */}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
