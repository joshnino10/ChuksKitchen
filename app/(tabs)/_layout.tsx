import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Tablayout() {
  return (
    <Tabs>
     <Tabs.Screen name='home'/>
     <Tabs.Screen name='explore'/>
     <Tabs.Screen name='orders'/>
     <Tabs.Screen name='profile'/>
    </Tabs>
  )
}

const styles = StyleSheet.create({})