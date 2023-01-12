import React from "react";
import { TouchableOpacity, Image } from "react-native";

interface IIConButton {
  containerStyle?: any;
  icon: any;
  iconStyle?: StyleSheet;
  onPress?: any;
}

const IconButton = ({
  containerStyle,
  icon,
  iconStyle,
  onPress,
}: IIConButton) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={() => onPress()}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
