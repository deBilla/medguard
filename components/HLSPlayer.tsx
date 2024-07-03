import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Video from "react-native-video";
import { VideoRef } from "react-native-video";

export const HLSPlayer = () => {
  const videoRef = useRef<VideoRef>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Video
        ref={videoRef}
        controls={true}
        source={{
          uri: "",
          isNetwork: true
        }}
        resizeMode={"stretch"}
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
        onError={(e: any) => console.log("error", e)}
      />
    </SafeAreaView>
  );
}
