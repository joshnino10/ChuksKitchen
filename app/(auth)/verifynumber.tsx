import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VerifyNumber() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Number</Text>
      <Text style={styles.subtitle}>
        Please enter the OTP sent to your mobile number.
      </Text>
      {/* You can add OTP input fields and a submit button here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center',     // centers horizontally
    padding: 20,
    backgroundColor: '#fff',  // light background
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});