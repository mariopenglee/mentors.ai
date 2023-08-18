/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { Children, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

// Import your logo image
import logo from './assets/images/logo.png';
import background from './assets/images/background.png';
import email from './assets/icons/email.png';
import lock from './assets/icons/lock.png';
import verticalLine from './assets/icons/verticalLine.png';
import horizontalLine from './assets/icons/horizontalLine.png';

// components
import MainLandingScreen from './pages/Home';



function App(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    if (username === 'Admin' && password === 'admin') {
      alert('Login successful!');
      setIsLogin(true);
      // Redirect to another page or perform further actions
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  if (isLogin) {
    return <MainLandingScreen />;
  }

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.landingTitle}>MENTORS AI</Text>
          <View style={styles.InputBoxRow}>
            <Image source={email} style={{ width: 30, height: 30 }} />
            <Image source={verticalLine} style={{ width: 1, height: 30 }} />
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            ></TextInput>
          </View>
          <View style={styles.InputBoxRow}>
            <Image source={lock} style={{ width: 30, height: 30 }} />
            <Image source={verticalLine} style={{ width: 1, height: 30 }} />
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Don't have an account? Sign up:
          </Text>
          <View style={styles.row}>
            <Image source={horizontalLine} style={{ width: '35%', height: 1 }} />
            <Text style={{ color: 'white' }}>OR</Text>
            <Image source={horizontalLine} style={{ width: '35%', height: 1 }} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.googleButton]}>
              <Text style={styles.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.appleButton]}>
              <Text style={styles.buttonText}>Sign in with Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 30,
  },
  sectionContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  landingTitle: {
    color: '#858585',
    textAlign: 'center',
    fontFamily: 'Copperplate',
    fontSize: 40,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  highlight: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    
  },
  input: {
    flex: 1,
  },
  InputBoxRow: {
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
  },
  signupText: {
    color: 'white',
    fontFamily: 'Copperplate',
    textAlign: 'center',
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default App;