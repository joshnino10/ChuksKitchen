import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="email"/>
        <Stack.Screen name="phonenumber"/>

    </Stack>
   
  )
}

const styles = StyleSheet.create({})