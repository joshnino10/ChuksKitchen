import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  FadeInRight,
  FadeOutLeft,
} from "react-native-reanimated";
import PhoneNumber from "@/Component/PhoneNumber/PhoneNumber";
import Email from "@/Component/Email/Email";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Phone Number");

  const tabs = [
    { id: "1", tab: "Phone Number" },
    { id: "2", tab: "Email" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/small product logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Join Chucks Kitchen</Text>
        <Text style={styles.subTitle}>
          Experience authentic Nigeria homemade meals delivered to your door.
        </Text>
      </View>

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        {tabs.map((item) => {
          const isActive = activeTab === item.tab;

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.tabButton,
                isActive && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(item.tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  isActive && styles.activeTabText,
                ]}
              >
                {item.tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

    
      <View style={styles.content}>
        <Animated.View
          key={activeTab}
          entering={FadeInRight.duration(300)}
          exiting={FadeOutLeft.duration(300)}
        >
          {activeTab === "Phone Number" && <PhoneNumber/>}
          {activeTab === "Email" && <Email/>}
        
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: "#FFFFFF",
  },

  header: {
   
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    width: 88,
    height: 63,
    resizeMode: "contain",
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
  },

  subTitle: {
    color: "#8D8781",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },

  tabContainer: {

    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    marginTop: 40,
    padding: 5,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
  },

  activeTabButton: {
    backgroundColor: "#FFFFFF",
  
  },

  tabText: {
    fontFamily: 'MontserratMedium',
    color: "#8D8781",
    fontSize: 16,
    textTransform: "capitalize",
  },

  activeTabText: {
    fontFamily: 'MontserratMedium',
    fontSize:16,
    color: "#000000",
    fontWeight: "600",
  },

  content: {
    marginTop: 40,
    minHeight: 60,
  },

  placeholderText: {
    fontSize: 16,
    color: "#333",
  },
});