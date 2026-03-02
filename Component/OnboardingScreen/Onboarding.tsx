import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
  
  const { width, height } = Dimensions.get('window')
  
  export default function Onboarding() {
    const [steps, setSteps] = useState(0)

    const router = useRouter()
  
    const onboarding = [
      {
        id: '1',
        backgroundImage: require('../../assets/images/onbording1.png'),
        title1: 'Authentic ',
        title2: 'Flavors',
        subtitle: 'Taste the heart of Nigeria.',
      },
      {
        id: '2',
        backgroundImage: require('../../assets/images/onboarding2.png'),
        title1: 'Order in',
        title2: 'Minutes',
        subtitle: 'Skip calls and order smoothly anytime.',
      },
      {
        id: '3',
        backgroundImage: require('../../assets/images/onboarding3.png'),
        title1: 'Delivered',
        title2: 'with Care',
        subtitle: 'Hot meals. Seamless experience.',
      },
    ]
  
    const currentItem = onboarding[steps]
  
    const handleNext = () => {
      if (steps < onboarding.length - 1) {
        setSteps(steps + 1)
      } else {
        router.replace('/welcomeSplashScreen')
      }
    }
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="black"/>
        <ImageBackground
          source={currentItem.backgroundImage}
          style={styles.image}
          resizeMode='cover'
        >
          {/* Skip Button (Top Right) */}
          {steps < onboarding.length - 1 && (
            <TouchableOpacity
              style={styles.skipContainer}
              onPress={() => setSteps(onboarding.length - 1)}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          )}
  
          {/* Content */}
          <View style={styles.overlay}>
            <Text style={styles.title}>{currentItem.title1}</Text>
            <Text style={styles.title}>{currentItem.title2}</Text>
            <Text style={styles.subtitle}>{currentItem.subtitle}</Text>
  
            {/* Dots */}
            <View style={styles.indicatorContainer}>
              {onboarding.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === steps && styles.activeDot,
                  ]}
                />
              ))}
            </View>
  
          
            <View style={styles.steprow}>
              <View style={{gap:2}}>
                <Text style={styles.step}>STEP</Text>
                <Text style={styles.stepText}>
                  <Text style={styles.activeStepNumber}>{steps + 1}</Text> / {onboarding.length}
                </Text>
              </View>
  
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <AntDesign name="arrow-right" size={30} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width,
      height,
      justifyContent: 'flex-end',
    },
  
    
    skipContainer: {
      position: 'absolute',
      top: 50,
      right: 24,
      zIndex: 100,
      elevation: 10, 
    },

    skipText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  
 
    overlay: {
      paddingHorizontal: 24,
      paddingBottom: 80,
    },

    title: {
      fontSize: 36,
      fontWeight: '700',
      color: '#fff',
      marginBottom: 8,
     
    
    },
    subtitle: {
      fontSize: 16,
      color: '#eee',
      lineHeight: 22,
    },
  
 
    indicatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },

    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(255,255,255,0.4)',
      marginRight: 6,
    },
    activeDot: {
      backgroundColor: '#FE8300',
      height: 8,
      width: 43,
    },
  
  
    steprow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    step:{
        color:'white',
        fontSize:14

    },
    stepText: {
      color: '#fff',
      fontSize: 18,
    },
    activeStepNumber: {
      fontWeight: '700',
      color: '#fff',
    },
    button: {
      height: 58,
      width: 58,
      justifyContent: 'center',
      backgroundColor: '#FE8300',
      borderRadius: 1000,
      alignItems: 'center',
    },
  })