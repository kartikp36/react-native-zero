import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Aora!</Text>
      <Link href={'https://youtu.be/ZBCUegTZF7M?si=8m_nH659BVq5bVCb'} style={{color: 'blue', textDecorationLine: 'underline'}}>Javascript Mastery</Link>
      <Link href={'/profile'} style={{color: 'navy', textDecorationLine: 'underline'}}>Profile</Link>
    </View>
  );
}
