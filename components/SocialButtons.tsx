import { View, Text } from "react-native";
import React from "react";
import IconButton from "./IconButton";

const SocialButtons = () => {
  return (
    <View
      style={{
        marginTop: 12,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "gray",
        }}
      >
        Social network
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 8,
        }}
      >
        <IconButton icon={require("./../assets/icons/facebook.png")} />

        <IconButton
          icon={require("./../assets/icons/twitter.png")}
          containerStyle={{
            marginLeft: 24,
          }}
        />

        <IconButton
          icon={require("./../assets/icons/instagram.png")}
          containerStyle={{
            marginLeft: 24,
          }}
        />
      </View>
    </View>
  );
};

export default SocialButtons;
