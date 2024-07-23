import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex flex-1 gap-4 flex-col items-center justify-center bg-blue-50">
      <Text className="text-2xl">Aora!</Text>
      <Link
        href={"https://youtu.be/ZBCUegTZF7M?si=8m_nH659BVq5bVCb"}
        style={{ color: "blue", textDecorationLine: "underline" }}
      >
        Javascript Mastery
      </Link>
      <Link
        href={"/profile"}
        style={{ color: "navy", textDecorationLine: "underline" }}
      >
        Profile
      </Link>
    </View>
  );
}
