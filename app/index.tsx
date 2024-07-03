import { HLSPlayer } from "@/components/HLSPlayer";
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
      <HLSPlayer />
    </View>
  );
}
