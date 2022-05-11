import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log("app executed"); // simplest way to debug our app
  const handlePress = () => console.log("Clicked!");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="click me"
        onPress={() => Alert.alert("My title","button tapped!")}
      />
      <Text onPress={handlePress}>Hello world!</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88B04B",
    alignItems: "center",
    justifyContent: "center",
  },
});
