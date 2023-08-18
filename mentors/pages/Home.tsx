import React from 'react';
import { 
  ImageBackground, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

// import assets
import background from '../assets/images/background.png';


// import components
import Navbar from '../components/Navbar';

export default

function MainLandingScreen() {
    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Navbar />
      </SafeAreaView>
      </ImageBackground>
    );
  }

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      },
  
    });
    