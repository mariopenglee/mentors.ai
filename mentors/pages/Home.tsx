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


const MainLandingScreen: React.FC = () => {
  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text>This is the Main Landing Screen</Text>
      {/* Other content */}
      <View style={styles.bottom}>
        <Navbar />
      </View>
    </View>
    </ImageBackground>
  );
};

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
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 12,
  },

  
    });
    
export default MainLandingScreen;