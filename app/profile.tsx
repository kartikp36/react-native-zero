import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profile Page</Text>
      <Link href={'/404'} style={{color: 'navy', textDecorationLine: 'underline'}}>404</Link>
    </View>
  );
}
