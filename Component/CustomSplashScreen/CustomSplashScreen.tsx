
import { ImageBackground, StyleSheet,  StatusBar } from 'react-native';

export default function CustomSplashScreen() {


  return (

      <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <ImageBackground
        source={require('../../assets/images/Splahscreen.png')}
        style={styles.image}
        resizeMode="cover"
        >
      
      </ImageBackground>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },
});