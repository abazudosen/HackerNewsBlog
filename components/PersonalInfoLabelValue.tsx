import { View, Text } from "react-native";
import React from "react";

interface IPersonalInfo {
  label: string;
  value: string;
}

const PersonalInfoLabelValue = ({ label, value }: IPersonalInfo) => {
  return (
    <View
      style={{
        marginTop: 12,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "grey",
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          marginTop: 8,
          fontSize: 16,
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default PersonalInfoLabelValue;
