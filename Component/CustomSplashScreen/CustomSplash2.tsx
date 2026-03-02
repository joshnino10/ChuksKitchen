import { View, Image, StyleSheet, Animated, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function CustomSplash2() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Navigate to next screen after 2.5 seconds
    const timer = setTimeout(() => {
      router.replace('/(auth)'); // change to your next screen
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.center}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/product logo.png")}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: '#FE8300'
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 242,
    height: 172,
  },
});