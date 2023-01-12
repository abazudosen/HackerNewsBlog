import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SocialButtons from "../../components/SocialButtons";
import PersonalInfoLabelValue from "../../components/PersonalInfoLabelValue";
import CustomButton from "../../components/CustomButton";
import { AuthStackNavigatorParamList } from "../../types/types";

const Profile = () => {
  const navigation = useNavigation<AuthStackNavigatorParamList>();

  function renderPersonalInfo() {
    return (
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 50,
          borderRadius: 12,
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("./../../assets/images/abaz.jpg")}
            style={{
              width: 180,
              height: 180,
              borderRadius: 180 / 2,
            }}
          />

          <Text
            style={{
              marginTop: 8,
              fontSize: 22,
            }}
          >
            Abaz Udosen
          </Text>
        </View>

        {/* Personal Info */}
        <View
          style={{
            marginVertical: 24,
          }}
        >
          <PersonalInfoLabelValue label="Nick Name" value="Abaz" />

          <SocialButtons />

          <PersonalInfoLabelValue label="Phone number" value="+234123456789" />

          <PersonalInfoLabelValue label="Email" value="abaz@hackernfd.com" />

          <PersonalInfoLabelValue label="Date of Birth" value="01/01/2023" />

          <PersonalInfoLabelValue label="Sex" value="Unknown" />
        </View>

        <CustomButton
          text="Log out"
          onPress={() => navigation.navigate("Sign in")}
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {/* Personal Info */}
      {renderPersonalInfo()}

      {/* Footer */}
      {/* <CustomButton text="Apply" onPress={() => navigation.goBack} /> */}
    </SafeAreaView>
  );
};

export default Profile;
